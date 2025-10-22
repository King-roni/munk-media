#!/bin/bash
set +e
cd "$(dirname "$0")"

for TRY_PORT in 3000 3001 3002 3003 3004 3005; do
  echo "Attempting port $TRY_PORT..."
  
  # Start dev server in background
  PORT=$TRY_PORT npm run dev > dev.log 2>&1 &
  DEV_PID=$!
  echo $DEV_PID > .dev_pid
  
  # Wait for server to start
  sleep 4
  
  # Check if server is responding
  if curl -sSf http://localhost:$TRY_PORT >/dev/null 2>&1; then
    echo ""
    echo "════════════════════════════════════════════════════════════"
    echo "✅ Dev server running successfully!"
    echo ""
    echo "OPEN THIS: http://localhost:$TRY_PORT"
    echo ""
    echo "════════════════════════════════════════════════════════════"
    echo ""
    echo "Log file: $(pwd)/dev.log"
    echo "PID file: $(pwd)/.dev_pid"
    echo ""
    echo "To stop: kill \$(cat .dev_pid)"
    exit 0
  else
    # Kill failed attempt
    kill $DEV_PID >/dev/null 2>&1 || true
    sleep 1
  fi
done

# All ports failed
echo "❌ Failed to start dev server after trying ports 3000-3005"
echo ""
echo "Last 60 lines of dev.log:"
tail -n 60 dev.log 2>/dev/null || echo "No log file found"
exit 1
