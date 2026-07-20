---
name: prettierignore-trailing-blank-line
description: When editing .prettierignore, always leave a trailing newline at the end of the file
metadata:
  type: feedback
---

When editing `.prettierignore`, ensure the file ends with a trailing newline after the last
entry — never leave the last entry as a bare line with no newline at EOF.

**Why:** The user asked for this explicitly. Note that Prettier already enforces it in this
repo: `prettier-plugin-sh` claims `.prettierignore` under the `sh` parser
(`prettier --file-info .prettierignore` → `"inferredParser": "sh"`), so `npm run prettier`
adds the newline on its own. The rule matters for edits made outside a Prettier run.

**How to apply:** After any Write/Edit to `.prettierignore`, confirm the file ends with a
newline. Do not add a *second* blank line — `plugin-sh` strips it, so that would fight the
formatter. Related: [[commit-conventions]].
