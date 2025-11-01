import fs from 'fs';
import path from 'path';

const exts = ['.ts','.tsx','.js','.jsx'];
const repo = process.cwd();

const files: string[] = [];
function walk(p: string) {
  for (const e of fs.readdirSync(p)) {
    const fp = path.join(p, e);
    const st = fs.statSync(fp);
    if (st.isDirectory()) {
      if (['node_modules','.git','.next','out','dist'].includes(e)) continue;
      walk(fp);
    } else if (exts.includes(path.extname(e))) {
      files.push(fp);
    }
  }
}
walk(repo);

let bad = 0;

function existsCaseSensitive(relImportFrom: string, importTarget: string) {
  // resolve relative to file
  const fromDir = path.dirname(relImportFrom);
  let resolved = importTarget.startsWith('.')
    ? path.resolve(fromDir, importTarget)
    : null;
  if (!resolved) return true; // ignore tsconfig path aliases here

  // try with extensions
  const candidates = [resolved, ...['.ts','.tsx','.js','.jsx','.css','.scss','.otf','.woff','.woff2','.ttf'].map(x=>resolved+x)];
  for (const cand of candidates) {
    if (fs.existsSync(cand)) {
      // verify each path segment case exactly
      const segs = path.relative(repo, cand).split(path.sep);
      let cur = repo;
      for (const s of segs) {
        const list = fs.readdirSync(cur);
        if (!list.includes(s)) return false; // case mismatch
        cur = path.join(cur, s);
      }
      return true;
    }
  }
  return false;
}

for (const f of files) {
  const src = fs.readFileSync(f,'utf8');
  // Rule A: no imports from /public inside TS/TSX
  const publicImport = src.match(/from\s+['"](\.{1,2}\/.*public\/.*)['"]/g);
  if (publicImport) {
    console.error(`[NEXT-SAFETY] Do not import from /public in ${f}. Use next/font/local or @font-face with /fonts.`);
    bad++;
  }
  // Rule B: check relative import existence & case
  const importRe = /import\s+.+?\s+from\s+['"](.+?)['"]/g;
  const requireRe = /require\(['"](.+?)['"]\)/g;
  const matches = [...src.matchAll(importRe), ...src.matchAll(requireRe)];
  for (const m of matches) {
    const target = m[1];
    if (!target.startsWith('.')) continue; // skip aliases, handled by TS
    if (!existsCaseSensitive(f, target)) {
      console.error(`[CASE] Case mismatch or missing file: ${target} imported in ${f}`);
      bad++;
    }
  }
}

if (bad > 0) {
  console.error(`\n❌ Linux compatibility check failed with ${bad} issues.\n`);
  process.exit(1);
} else {
  console.log('✅ Linux compatibility check passed.');
}

