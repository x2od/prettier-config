---
name: readme-informational-only
description: The README is informational only and does not need to match the actual config code
metadata:
  type: feedback
---

In this repo (`@x2od/prettier-config`), the README's examples and file-pattern
descriptions do NOT have to stay in sync with the actual configuration in
`index.json` / `.prettierrc.mjs`. The README is written as human-facing
information for anyone reading the package, not as an authoritative spec.

**Why:** The user stated this explicitly. Minor drift between documented globs
(e.g. README says `*meta.xml`) and the real config (`*-meta.xml`) is acceptable
and expected.

**How to apply:** Do NOT flag README-vs-code mismatches as bugs or push to
reconcile them. Treat the code as the source of truth; only update the README
when the user asks.
