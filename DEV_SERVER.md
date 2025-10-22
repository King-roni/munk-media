# 🚀 Dev Server Quick Start

## Automatic Start (Recommended)

```bash
./start-dev.sh
```

This script will:
- Auto-detect a free port (tries 3000-3005)
- Kill any conflicting processes
- Start the Next.js dev server
- Verify it's running
- Print the URL

## Manual Start

### Option 1: Default Port
```bash
npm run dev
```
Runs on http://localhost:3000

### Option 2: Custom Port
```bash
PORT=3001 npm run dev
```

### Option 3: Kill Port & Restart
```bash
lsof -ti:3000 | xargs kill -9 && npm run dev
```

## Stop Server

```bash
kill $(cat .dev_pid)
```

Or press `Ctrl+C` in the terminal.

## Logs

Check `dev.log` for detailed server output:
```bash
tail -f dev.log
```

## Current Status

✅ **Server is currently running on port 3001**

**OPEN THIS:** http://localhost:3001

---

## Troubleshooting

### Port Already in Use
The `start-dev.sh` script automatically handles this by trying ports 3000-3005.

### Permission Errors (EPERM)
Usually resolved by killing the existing process:
```bash
lsof -ti:3000 | xargs kill -9
```

### Server Won't Start
1. Check logs: `tail -n 50 dev.log`
2. Reinstall dependencies: `npm install`
3. Clear Next.js cache: `rm -rf .next`
4. Try production build: `npm run build && npm run start`

---

## Motion Features to Test

Once the server is running, visit http://localhost:3001 and test:

1. ✨ **Magnetic Cursor** - Move mouse around page
2. 🌊 **Smooth Scrolling** - Scroll with mouse wheel
3. 📊 **Progress Bar** - Watch top bar while scrolling
4. 📝 **Text Reveals** - Character-by-character animations in Hero
5. 🏔️ **Parallax** - Background elements move at different speeds
6. 🧲 **Magnetic Buttons** - Hover over "Book a Call" button
7. 🎯 **Section Reveals** - Scroll down to see sections fade in
8. 🚪 **Page Transitions** - Navigate between routes (About, Services, etc.)

