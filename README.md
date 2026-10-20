# `@x2od/prettier-config`

> A shared [Prettier](https://prettier.io) config for [X-Squared on Demand](https://www.x2od.com).

## Installation

```bash
npm install --save-dev @x2od/prettier-config
```

## Basic Usage

Prettier supports multiple ways to reference this config in a project. Choose one:

**Via `package.json`:**

<!-- prettier-ignore -->
```json
{
  "prettier": "@x2od/prettier-config"
}
```

**Via `.prettierrc` (JSON or YAML):**

<!-- prettier-ignore -->
```json
"@x2od/prettier-config"
```

**Via `prettier.config.js` or `.prettierrc.js`:**

<!-- prettier-ignore -->
```js
module.exports = '@x2od/prettier-config';
```

**Via `prettier.config.mjs`, or `.prettierrc.mjs`:**

<!-- prettier-ignore -->
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
- **singleQuote**: false
- **trailingComma**: "none"
- **bracketSpacing**: true
- **bracketSameLine**: true
- **endOfLine**: "lf"

**File-specific overrides** are included for:

- `.{cmp,component,page,app,auradoc,design,evt,intf,tokens}` — Aura bundle files and Visualforce pages/components
  - Aura bundle files under `**/aura/**` use printWidth 80. Visualforce pages and components keep printWidth 180.
  - `.{auradoc,design,evt,intf,tokens}` also use whitespace-insensitive formatting, because these files never render as a page. Components, pages and apps keep Prettier's default whitespace handling, so inline text such as `Hello <b>{!name}</b>,` never gains a visible space.
- `.{cls,trigger}` — Apex classes and triggers (tabs; triggers use printWidth: 200)
- `*.apex` — Anonymous Apex (tabs)
- `*.xml` — XML, with PMD rulesets handled distinctly; Salesforce metadata (`*-meta.xml`) and manifests (`manifest/*.xml`, `package.xml`, `destructiveChanges*.xml`) use 4-space indentation to match Salesforce output
- `.{yml,yaml}` — YAML files
- `*.json` — JSON files (printWidth: 80)
- `*.json5` — JSON5 files, formatted with the `jsonc` parser (printWidth: 80)
- `package.json` — `json-stringify` parser (printWidth: 80); fields are sorted by `prettier-plugin-pkg`
- `*.{js,cjs,mjs,jsx,ts,cts,mts,tsx}` — JavaScript and TypeScript use single quotes
- `.prettierrc*` — Prettier config files (printWidth: 80)
- `*.md` — Markdown (spaces, not tabs)
- `.html` — HTML files: `doc*` with custom attribute grouping; LWC templates with the `lwc` parser
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

## Upgrading to 0.5.0

Version 0.5.0 changes the formatting output for these files. The first `prettier --write` after upgrading reformats them:

- **JSON5** (`*.json5`) uses the `jsonc` parser instead of `json5`.
- **Aura bundle markup** (`**/aura/**/*.{cmp,app,auradoc,design,evt,intf,tokens}`) uses printWidth 80 instead of 180. Visualforce pages and components keep 180.
- **package.json** uses printWidth 80 instead of 180.

Follow the same steps as in [Upgrading to 0.2.0](#upgrading-to-020) to keep this reformat out of `git blame`.

## Upgrading to 0.2.0

The first `prettier --write` after upgrading to 0.2.0 will reformat many files in your project:

- **Apex** (`*.cls`, `*.trigger`, `*.apex`) switches from spaces to tabs, so every Apex file changes.
- **Aura bundle files** (`*.app`, `*.auradoc`, `*.design`, `*.evt`, `*.intf`, `*.tokens`) are formatted for the first time. Apps use Prettier's default whitespace handling, like components; the other five use whitespace-insensitive formatting, which nests one tag per line.
- **Manifests** (`manifest/*.xml`, `package.xml`, `destructiveChanges*.xml`) switch from tabs to 4-space indentation, matching Salesforce metadata files.
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

<!-- prettier-ignore -->
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

<!-- prettier-ignore -->
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

<!-- prettier-ignore -->
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

<!-- prettier-ignore -->
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

## Testing the Configuration

The `templates/` folder holds one unformatted sample per file type. The `expected/` folder holds the reviewed Prettier output for each sample.

1. Change the configuration in `index.json` or `.prettierrc.mjs`.
2. Run `npm run test:format`. It copies `templates/` into `test/`, formats `test/` with the current configuration, and compares the result with `expected/`. Any differences are printed.
3. If the differences are correct, run `npm run test:format:update` to replace `expected/` with the new output. Review the changes before you commit them.
4. Run `npm run test:idempotence`. It formats each template twice and fails if any file changes on the second pass or has no parser.

To add a sample, put the file in `templates/`, then run `npm run test:format` and review the output. Run `npm run test:format:update` once you accept it.

`test/` is ignored by Git, so do not edit it. Make changes in `templates/` instead.

`npm run test:format` hides the `DEP0190` deprecation warning from `prettier-plugin-apex`. The plugin starts a shell with unescaped arguments. No newer plugin release fixes this yet.
