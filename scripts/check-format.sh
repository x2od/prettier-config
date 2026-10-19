#!/usr/bin/env bash
# Format the sample files and compare the result with expected/.
# Pass --update to replace expected/ with the current output.
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT"

"$ROOT/scripts/reset-test.sh"
npx prettier --write test > /dev/null

if [ "${1:-}" = "--update" ]; then
  rm -rf expected
  cp -R test expected
  echo "check-format: expected/ updated from test/"
  exit 0
fi

if [ ! -d expected ]; then
  echo "check-format: expected/ is missing. Run npm run test:format:update and review the output." >&2
  exit 1
fi

diff -r expected test
echo "check-format: test/ matches expected/"
