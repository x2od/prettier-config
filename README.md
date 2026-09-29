# `@x2od/prettier-config`

> A shared [Prettier](https://prettier.io) config for [X-Squared on Demand](https://www.x2od.com).

## Installation

```bash
npm install --save-dev @x2od/prettier-config
```

## Basic Usage

Prettier supports multiple ways to reference this config in a project. Choose one:

**Via `package.json`:**

```json
{
  "prettier": "@x2od/prettier-config"
}
```

**Via `.prettierrc` (JSON or YAML):**

```json
"@x2od/prettier-config"
```

**Via `prettier.config.js` or `.prettierrc.js`:**

```js
module.exports = '@x2od/prettier-config';
```

**Via `prettier.config.mjs`, or `.prettierrc.mjs`:**

```js
import x2odPrettierConfig from '@x2od/prettier-config' with { type: 'json' };
export default x2odPrettierConfig;
```

## Default Configuration

This config includes sensible defaults optimized for Salesforce development and general web projects:

**Base settings:**

- **printWidth**: 180
- **tabWidth**: 2
- **useTabs**: true
- **singleQuote**: true
- **trailingComma**: "none"
- **bracketSpacing**: true
- **bracketSameLine**: true
- **endOfLine**: "lf"

**File-specific overrides** are included for:

- `.{app,auradoc,cmp,component,design,evt,intf,page,tokens}` — Aura bundle files and Visualforce pages/components
- `.{cls,trigger}` — Apex classes and triggers (tabs; triggers use printWidth: 200)
- `*.apex` — Anonymous Apex (tabs)
- `*.xml` — XML, with PMD rulesets handled distinctly; Salesforce metadata (`*-meta.xml`) and manifests (`manifest/*.xml`, `package.xml`, `destructiveChanges*.xml`) use 4-space indentation to match Salesforce output
- `.{yml,yaml}` — YAML files
- `*.json` / `*.json5` — JSON files (printWidth: 80)
- `package.json` — sorted via `prettier-plugin-pkg`
- `.prettierrc*` — Prettier config files (printWidth: 80)
- `*.md` — Markdown (spaces, not tabs)
- `.html` — HTML files: `doc*` with custom attribute grouping; LWC templates with the `lwc` parser and whitespace-insensitive formatting
- `*.sh` — Shell scripts (spaces, `indent: 2`, via `prettier-plugin-sh`)

> [!NOTE]
> Standalone SOQL files (`*.soql`) are not formatted. No Prettier plugin parses bare SOQL, so add them to your `.prettierignore` (see below).

**Plugins:**

- `prettier-plugin-apex` — Apex language support
- `@prettier/plugin-xml` — XML formatting
- `prettier-plugin-organize-attributes` — HTML attribute organization
- `prettier-plugin-pkg` — `package.json` field sorting
- `prettier-plugin-sh` — Shell / Bash script formatting

## Recommended `.prettierignore`

Prettier won't format these, or shouldn't, in a Salesforce project. Start with this list and add project-specific paths:

```gitignore
# Salesforce CLI state
.sf/
.sfdx/
.localdevserver/

# Static resources are often minified or vendored
**/staticresources/**

# No Prettier parser for standalone SOQL
*.soql

# Build and test output
coverage/
node_modules/
```

## Upgrading to 0.2.0

The first `prettier --write` after upgrading to 0.2.0 will reformat many files in your project:

- **Apex** (`*.cls`, `*.trigger`, `*.apex`) switches from spaces to tabs, so every Apex file changes.
- **Aura bundle files** (`*.app`, `*.auradoc`, `*.design`, `*.evt`, `*.intf`, `*.tokens`) are formatted for the first time.
- **Manifests** (`manifest/*.xml`, `package.xml`, `destructiveChanges*.xml`) switch from tabs to 4-space indentation, matching Salesforce metadata files.
- **LWC templates** (`**/lwc/**/*.html`) are reflowed with whitespace-insensitive formatting, which removes the awkward `><` line breaks.
- **SOQL files** (`*.soql`) are no longer matched by any override. Add `*.soql` to your `.prettierignore` (see above), or `prettier --check` will report errors for them.

To keep this reformat out of `git blame`:

1. Upgrade the package, run `prettier --write .`, and commit the result on its own, with no other changes.
2. Add that commit's full SHA to a `.git-blame-ignore-revs` file in the repository root:

   ```text
   # Reformat for @x2od/prettier-config 0.2.0
   <full commit SHA>
   ```

3. Run `git config blame.ignoreRevsFile .git-blame-ignore-revs` locally. GitHub reads this file automatically in its blame view.

## Extending Shared Configurations

While this configuration is designed to be used as-is, you can extend it if your project requires custom overrides. Prettier does not offer an "extends" mechanism like ESLint.

Prettier uses [cosmiconfig](https://github.com/davidtheclark/cosmiconfig) for
configuration file support. This means you can configure prettier via:

- A `.prettierrc` file, written in YAML or JSON, with optional extensions: `.yaml/.yml/.json`.
- A `prettier.config.js`, `.prettierrc.js`,`prettier.config.mjs`, or `.prettierrc.mjs` file that exports an object.
- A `"prettier"` key in your `package.json` file.

To extend the configuration, import/require it in a JavaScript config file and export your modifications:

**With CommonJS (`.js`):**

```javascript
// prettier.config.js or .prettierrc.js
const x2odPrettierConfig = require('@x2od/prettier-config');

/**
 * @see https://prettier.io/docs/configuration
 * @type {import("prettier").Config}
 */
module.exports = {
  ...x2odPrettierConfig,
  printWidth: 100,
  overrides: [
    ...x2odPrettierConfig.overrides,
    {
      files: '*.toml',
      options: {
        useTabs: false
      }
    }
  ],
  plugins: [...x2odPrettierConfig.plugins, 'prettier-plugin-toml']
};
```

If you only need to change top-level options, you can inline the `require()` call:

```javascript
// prettier.config.js
/**
 * @see https://prettier.io/docs/configuration
 * @type {import("prettier").Config}
 */
module.exports = {
  ...require('@x2od/prettier-config'),
  printWidth: 120
};
```

> [!WARNING]
> Don't set `overrides` or `plugins` in the inline form. A key you set replaces the package's value entirely instead of adding to it, so you would lose every built-in override (Apex, XML, LWC, and so on) or plugin. To add overrides or plugins, use the form above and spread `...x2odPrettierConfig.overrides` and `...x2odPrettierConfig.plugins`.

**With ES modules (`.mjs`):**

```javascript
// .prettierrc.mjs or prettier.config.mjs ESM
import x2odPrettierConfig from '@x2od/prettier-config' with { type: 'json' };
// The json type specification is because this package has a JSON configuration file.
// If your package exports javascript, you will not need this.

/**
 * @see https://prettier.io/docs/configuration
 * @type {import("prettier").Config}
 */
const config = {
  ...x2odPrettierConfig,
  $schema: 'https://json.schemastore.org/prettierrc',
  printWidth: 180,
  overrides: [
    ...x2odPrettierConfig.overrides,
    {
      files: '*.toml',
      options: {
        useTabs: false
      }
    }
  ],
  plugins: [...x2odPrettierConfig.plugins, 'prettier-plugin-toml']
};

export default config;
```

Note that additional plugins must be added as devDependencies in the project (for example, `npm install --save-dev prettier-plugin-toml`).

## Configuration Considerations

When adding overrides, prefer a single string pattern with curly-brace alternation for extensions that share a stem:

```json
{
  "files": "*.{yaml,yml}",
  "options": {
    "singleQuote": true
  }
}
```

`files` also accepts an array of patterns, which is the right choice when the globs can't be expressed as one alternation (e.g. `["**/pmd/*.xml", "ruleset.xml", "pmd*.xml"]`).

When extending sections like `overrides` and `plugins`, be sure to spread the original config's values (`...x2odPrettierConfig.overrides` and `...x2odPrettierConfig.plugins`) to preserve them. If adding plugins, install them as local devDependencies.
