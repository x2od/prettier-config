#!/usr/bin/env bash
if [ -n "$1" ]; then echo "arg: $1"; fi
case "$2" in
  a) echo a ;;
  *) echo other ;;
esac
for f in *.js; do echo "$f"; done
