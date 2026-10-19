#!/usr/bin/env bash
# Replace test/ with a fresh copy of templates/.
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
SRC="$ROOT/templates"
DEST="$ROOT/test"

if [ ! -d "$SRC" ]; then
  echo "reset-test: $SRC not found" >&2
  exit 1
fi

rm -rf "$DEST"
cp -R "$SRC" "$DEST"
echo "reset-test: test/ restored from templates/ ($(find "$DEST" -type f | wc -l | tr -d ' ') files)"
