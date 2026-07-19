---
name: package-json-parser-not-redundant
description: The package.json override's json-stringify parser is required, not redundant
metadata:
  type: project
---

In `index.json`, the `package.json` override sets `"parser": "json-stringify"`.
This looks redundant (Prettier already uses json-stringify for package.json by
default) but it is NOT — it must come AFTER the earlier `*.json` override, which
forces `"parser": "json"`. Without re-asserting json-stringify, that earlier
override would win and disable `prettier-plugin-pkg`'s field sorting.

**Why:** Prettier merges all matching overrides in array order; a later override
wins on conflicting keys. Removing the explicit parser silently breaks
package.json sorting.

**How to apply:** Do not "clean up" this parser as redundant. Keep the
`package.json` override positioned after the `*.json` override.
