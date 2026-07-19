---
name: commit-conventions
description: Directives for commit messages and pull requests in this repo
metadata:
  type: feedback
---

Commit and pull-request conventions the user requires in this repo
(`@x2od/prettier-config`).

**Commits:**
- Always use a commit **type** that exists in the release-please configuration
  (`release-please-config.json` → `changelog-sections`). Currently valid types:
  `feat`, `fix`, `test`, `chore`, `perf`, `refactor`, `style`, `docs`, `revert`,
  `ci`, `build`. Do not invent types (e.g. `deps`) that aren't listed.
- Use a **scope** whenever appropriate, e.g. `feat(config):`,
  `ci(release-please):`, `build(deps):`.
- The commit **title must start with a present-tense verb** (e.g. "add",
  "fix", "refine", "remove" — not "added"/"adds"/"adding").
- **Any change to `index.json` is always a `feat`.** Every commit/PR that edits
  `index.json` (the published Prettier config) MUST use the `feat` type,
  regardless of the change's nature — even a bug fix, refactor, or formatting
  tweak. `index.json` is what consumers install, so any edit is a
  consumer-facing feature change. Scope it (e.g. `feat(config):`).

**Pull requests:**
- When opening OR updating a PR, update the README text to account for anything
  new in the change. See [[readme-informational-only]] — the README is
  informational, but it should still be refreshed when a PR introduces new
  behavior worth documenting.
- Use `BEGIN_NESTED_COMMIT` / `END_NESTED_COMMIT` blocks (one pair per commit)
  in the PR description ONLY for changes the PR **title does not already cover**.
  The title becomes one changelog entry; nested blocks add entries for the
  *other* commits. If the title already names every change (e.g.
  "ignore package-lock.json and .claude"), one entry suffices — do NOT add
  nested commits.
- **Do NOT hard-wrap paragraphs in PR descriptions.** Write each paragraph as a
  single long line and let GitHub soft-wrap it; do not insert newlines mid-
  paragraph. Keep blank lines between paragraphs, and keep list items / code
  blocks as-is. (This applies to PR/issue descriptions, not to these memory
  files.)

**Why:** These match the repo's release-please + conventional-commit setup so
the generated CHANGELOG stays clean and complete.
