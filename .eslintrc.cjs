module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'import', 'unused-imports', 'simple-import-sort'],
  extends: ['next', 'next/core-web-vitals', 'plugin:import/recommended', 'plugin:import/typescript'],
  rules: {
    // Linux-critical: import paths must match exact casing on disk
    'import/no-unresolved': ['error', { caseSensitive: true }],
    'import/no-absolute-path': 'error',
    'import/order': 'off',
    'simple-import-sort/imports': 'warn',
    'simple-import-sort/exports': 'warn',
    'unused-imports/no-unused-imports': 'warn'
  },
  settings: { 'import/resolver': { typescript: {} } }
};

