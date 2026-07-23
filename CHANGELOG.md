# Changelog

## [0.1.1](https://github.com/x2od/prettier-config/compare/v0.1.0...v0.1.1) (2026-07-23)


### 🔧 Miscellaneous Chores

* **release-please:** Add emoji to changelog section headers ([#74](https://github.com/x2od/prettier-config/issues/74)) ([59389df](https://github.com/x2od/prettier-config/commit/59389dfa8cdc7009df5846109fa144c6865d7da1))
* **scripts:** Add prune command to switch to main and delete merged branches ([748685a](https://github.com/x2od/prettier-config/commit/748685ad1a6128954d75d0bc3e902d5693c92e49))


### 🎨 Styles

* **prettier:** Add trailing newline to .prettierignore ([8aef505](https://github.com/x2od/prettier-config/commit/8aef5059d0362dbbad4f6cebbccd89f660b995c2))


### 👷 Continuous Integration

* **husky:** Add pre-commit prettier hook and commit-msg linter ([#72](https://github.com/x2od/prettier-config/issues/72)) ([97cffaa](https://github.com/x2od/prettier-config/commit/97cffaa39e9c77c883aa433829429bc67686e191))
* **prettier:** Add workflow verifying formatting on pull requests ([97cffaa](https://github.com/x2od/prettier-config/commit/97cffaa39e9c77c883aa433829429bc67686e191))
* **renovate:** Prevent automerge of prettier packages ([8aef505](https://github.com/x2od/prettier-config/commit/8aef5059d0362dbbad4f6cebbccd89f660b995c2))


### 📦 Build System

* **lint-staged:** Update devdependency lint-staged from 17.1.0 to 17.1.1 ([#77](https://github.com/x2od/prettier-config/issues/77)) ([578bd71](https://github.com/x2od/prettier-config/commit/578bd714d4b0f5a27525af53b492411b66aa67a4))
* **lint-staged:** Update devdependency lint-staged from 17.1.1 to 17.2.0 ([#78](https://github.com/x2od/prettier-config/issues/78)) ([8aebf80](https://github.com/x2od/prettier-config/commit/8aebf80dd6bfc1db770bb2477bd94e4bf09931dc))
* **prettier:** Add prettier as a devDependency ([#71](https://github.com/x2od/prettier-config/issues/71)) ([8aef505](https://github.com/x2od/prettier-config/commit/8aef5059d0362dbbad4f6cebbccd89f660b995c2))
* **release-please:** Update devdependency release-please from 17.10.3 to 17.10.4 ([#76](https://github.com/x2od/prettier-config/issues/76)) ([b9dd75d](https://github.com/x2od/prettier-config/commit/b9dd75dda2f021d7a2c2bd7d3f5cf19387c1ad32))

## [0.1.0](https://github.com/x2od/prettier-config/compare/v0.0.8...v0.1.0) (2026-07-19)


### Features

* **config:** Add prettier-plugin-sh for shell script formatting ([#70](https://github.com/x2od/prettier-config/issues/70)) ([b5147a9](https://github.com/x2od/prettier-config/commit/b5147a94afb740d3466a974396bdd7dd482e2e77))
* **config:** Format Apex and SOQL with spaces instead of tabs ([52a613f](https://github.com/x2od/prettier-config/commit/52a613f1a873d864bc369dd53fdb75f3ff3a7b55))
* **config:** Match Salesforce metadata files with *-meta.xml glob ([52a613f](https://github.com/x2od/prettier-config/commit/52a613f1a873d864bc369dd53fdb75f3ff3a7b55))


### Bug Fixes

* **release-please:** Deactivate bump patch for minor pre major ([77a1028](https://github.com/x2od/prettier-config/commit/77a10284f565241e806869a20186dba7b15930f9))


### Miscellaneous Chores

* **prettier:** Ignore package-lock.json and .claude ([#68](https://github.com/x2od/prettier-config/issues/68)) ([7b8d23f](https://github.com/x2od/prettier-config/commit/7b8d23f96f41fbf3322a466be7dc689047cc0de2))
* **prettier:** Refine local package.json prettier local override ([#64](https://github.com/x2od/prettier-config/issues/64)) ([17d5333](https://github.com/x2od/prettier-config/commit/17d533316c6bfafb86a8120f9b5cd0609a0214df))
* **release-please:** Exit prerelease ([55fbd47](https://github.com/x2od/prettier-config/commit/55fbd47f34a590c89fff1128a0f6dd1b2f1b6730))
* **release-please:** Remove unused deps changelog section ([#65](https://github.com/x2od/prettier-config/issues/65)) ([5a3008d](https://github.com/x2od/prettier-config/commit/5a3008d6aabb99f9371f4756b6ec5dc621d3b677))


### Documentation

* **claude:** Add project memory files ([#66](https://github.com/x2od/prettier-config/issues/66)) ([99c873b](https://github.com/x2od/prettier-config/commit/99c873bbfe2d71ee28840372928271ac8384f1eb))
* **claude:** Scope nested-commit rule to changes not named in the PR title ([#69](https://github.com/x2od/prettier-config/issues/69)) ([a327403](https://github.com/x2od/prettier-config/commit/a327403fc9be7b829b43a2ea5e43325b733b93e5))


### Continuous Integration

* **actions/checkout:** Update actions/checkout action from v6.0.3 to v7.0.0 ([#59](https://github.com/x2od/prettier-config/issues/59)) ([af49760](https://github.com/x2od/prettier-config/commit/af49760ee8132769879e00478da75034984a26aa))
* **actions/setup-node:** Update actions/setup-node action from v6.5.0 to v7.0.0 ([#60](https://github.com/x2od/prettier-config/issues/60)) ([c2de93c](https://github.com/x2od/prettier-config/commit/c2de93c8df02a3d4b524c2b9d64c5fbd35aa5771))
* **release-please:** Run on every push to main ([cc928c4](https://github.com/x2od/prettier-config/commit/cc928c4f8f9baf083fdd162710a3940cf70eb8de))
* **release-please:** Serialize runs with a cancel-in-progress concurrency group ([#67](https://github.com/x2od/prettier-config/issues/67)) ([02946a2](https://github.com/x2od/prettier-config/commit/02946a20f03cb8d4a0f5a17d6b36b1472608bc3a))
* **renovate:** Require manual approval for major prettier updates ([#63](https://github.com/x2od/prettier-config/issues/63)) ([046f66e](https://github.com/x2od/prettier-config/commit/046f66ed2a919d869786d7072a011d6a3c84d489))


### Build System

* **@x2od/prettier-config:** Update devdependency @x2od/prettier-config from 0.0.7 to 0.0.8 ([#57](https://github.com/x2od/prettier-config/issues/57)) ([21edfd9](https://github.com/x2od/prettier-config/commit/21edfd98e474376d0892db848c990950883a1fe6))
* **deps:** Remove self-referential @x2od/prettier-config devDependency ([#61](https://github.com/x2od/prettier-config/issues/61)) ([ff24c61](https://github.com/x2od/prettier-config/commit/ff24c612c9b16ffabc5a7a108fc5fd1aced4b08f))

## [0.0.8](https://github.com/x2od/prettier-config/compare/v0.0.7...v0.0.8) (2026-07-18)


### Features

* **config:** Reconfigure dependencies and refine tab/space rules ([#55](https://github.com/x2od/prettier-config/issues/55)) ([4bbfad4](https://github.com/x2od/prettier-config/commit/4bbfad487f77c66ff3aba3dd5a3b0e773810e479))
* **config:** Sort package.json fields via prettier-plugin-pkg ([4bbfad4](https://github.com/x2od/prettier-config/commit/4bbfad487f77c66ff3aba3dd5a3b0e773810e479))


### Bug Fixes

* **config:** Correct PMD ruleset glob from stringified array to real array ([4bbfad4](https://github.com/x2od/prettier-config/commit/4bbfad487f77c66ff3aba3dd5a3b0e773810e479))
* **config:** Use valid quoteProps key for *.json5 override ([4bbfad4](https://github.com/x2od/prettier-config/commit/4bbfad487f77c66ff3aba3dd5a3b0e773810e479))


### Miscellaneous Chores

* **release-please:** Add release-please devDependency ([225fead](https://github.com/x2od/prettier-config/commit/225feadaae6b3f8ad782293345f3afd30543b040))


### Documentation

* **readme:** Improve documentation and configuration ([#44](https://github.com/x2od/prettier-config/issues/44)) ([6932787](https://github.com/x2od/prettier-config/commit/6932787649e16711a564df14fbd398d8db2765e7))


### Build System

* **@x2od/prettier-config:** Update devdependency @x2od/prettier-config from 0.0.6 to 0.0.7 ([#41](https://github.com/x2od/prettier-config/issues/41)) ([337caba](https://github.com/x2od/prettier-config/commit/337cabadb94d404bba8680d8fbfe7d5d12407763))
* **deps:** Make prettier an optional peerDependency and add prettier-plugin-pkg ([4bbfad4](https://github.com/x2od/prettier-config/commit/4bbfad487f77c66ff3aba3dd5a3b0e773810e479))
* **prettier:** Update devdependency prettier from 3.8.3 to 3.8.3 ([#40](https://github.com/x2od/prettier-config/issues/40)) ([2dee9ce](https://github.com/x2od/prettier-config/commit/2dee9ce52e32722ca2ea73f7345c4440d1e4cec0))
* **prettier:** Update peerdependency prettier from 3.8.3 to 3.8.4 ([#45](https://github.com/x2od/prettier-config/issues/45)) ([72230f3](https://github.com/x2od/prettier-config/commit/72230f35b74a6585a25e4fd151ed802fe58af4eb))
* **prettier:** Update peerdependency prettier from 3.8.4 to 3.8.5 ([#49](https://github.com/x2od/prettier-config/issues/49)) ([857b4b0](https://github.com/x2od/prettier-config/commit/857b4b0480997c491573f2a498c9b93e406324d9))
* **prettier:** Update peerdependency prettier from 3.8.5 to 3.9.0 ([#50](https://github.com/x2od/prettier-config/issues/50)) ([d15182c](https://github.com/x2od/prettier-config/commit/d15182cd496db9b0656d2b0767ad12a66d567cd8))
* **prettier:** Update peerdependency prettier from 3.9.0 to 3.9.1 ([#51](https://github.com/x2od/prettier-config/issues/51)) ([0d5c5a7](https://github.com/x2od/prettier-config/commit/0d5c5a7613846890e49361c2219771ae86c7cee1))
* **prettier:** Update peerdependency prettier from 3.9.1 to 3.9.3 ([#52](https://github.com/x2od/prettier-config/issues/52)) ([6202051](https://github.com/x2od/prettier-config/commit/6202051d235af292af57193265ff421bdfc72d58))
* **prettier:** Update peerdependency prettier from 3.9.3 to 3.9.4 ([#53](https://github.com/x2od/prettier-config/issues/53)) ([f056650](https://github.com/x2od/prettier-config/commit/f056650a0deedda6f55bd4b6f87eb22efd160b2f))
* **prettier:** Update peerdependency prettier from 3.9.4 to 3.9.5 ([#54](https://github.com/x2od/prettier-config/issues/54)) ([4aab500](https://github.com/x2od/prettier-config/commit/4aab500f63b0ef2da20d4cc418548226d68b1502))

## [0.0.7](https://github.com/x2od/prettier-config/compare/v0.0.6...v0.0.7) (2026-05-21)


### Bug Fixes

* Use spaces by default in apex ([#36](https://github.com/x2od/prettier-config/issues/36)) ([5e4325e](https://github.com/x2od/prettier-config/commit/5e4325ef8028701f30bea1e5a4e4608267d5982f))


### Miscellaneous Chores

* **@prettier/plugin-xml:** Update dependency @prettier/plugin-xml from 3.4.1 to 3.4.2 ([#37](https://github.com/x2od/prettier-config/issues/37)) ([eadcc55](https://github.com/x2od/prettier-config/commit/eadcc553d6963dc23cef110df204696cbbb89db6))
* **prettier-plugin-apex:** Update dependency prettier-plugin-apex from 2.2.0 to 2.2.6 ([86136c3](https://github.com/x2od/prettier-config/commit/86136c38e3e167a88fc6c0a06fcf7181cf315d68))
* **prettier:** Update dependency prettier from 3.8.1 to 3.8.3 ([#39](https://github.com/x2od/prettier-config/issues/39)) ([4e72501](https://github.com/x2od/prettier-config/commit/4e725013165c618c78c469d7667694a09c985281))
* **release-please:** Add deps section ([55d52bd](https://github.com/x2od/prettier-config/commit/55d52bd95fb004aa385c57d2f2cb49a92911e399))
* **renovate:** Update range strategy ([55d52bd](https://github.com/x2od/prettier-config/commit/55d52bd95fb004aa385c57d2f2cb49a92911e399))


### Continuous Integration

* **googleapis/release-please-action:** Update googleapis/release-please-action action from v4 to v5.0.0 ([#34](https://github.com/x2od/prettier-config/issues/34)) ([a0cff40](https://github.com/x2od/prettier-config/commit/a0cff401c0463a92912a7cff576f49124f9ba7eb))


### Build System

* **@x2od/prettier-config:** Update dependency @x2od/prettier-config from 0.0.3 to 0.0.6 ([#30](https://github.com/x2od/prettier-config/issues/30)) ([2a38077](https://github.com/x2od/prettier-config/commit/2a38077a7526a0cbe9f3e45473c454e1d23d2736))
* **release-please:** Update cache for setup-node ([4763275](https://github.com/x2od/prettier-config/commit/4763275337fd4f37dc562320d5b5a3a07aaa5adf))
* Update some dependencies for renovate to find ([75a0b50](https://github.com/x2od/prettier-config/commit/75a0b50feaadaa19a5b220b860cfc8473d63b294))

## [0.0.6](https://github.com/x2od/prettier-config/compare/v0.0.5...v0.0.6) (2026-04-21)


### Bug Fixes

* **renovate:** Move renovate file to correct location ([#23](https://github.com/x2od/prettier-config/issues/23)) ([f9732f1](https://github.com/x2od/prettier-config/commit/f9732f146ee19366c73ce54692afc7da2d9058ad))


### Continuous Integration

* **actions/checkout:** Update actions/checkout action from v4 to v6 ([#28](https://github.com/x2od/prettier-config/issues/28)) ([91fefba](https://github.com/x2od/prettier-config/commit/91fefba9c88ecde35d1aa7323c43fc13b4d61988))
* **actions/setup-node:** Update actions/setup-node action from v4 to v6 ([#29](https://github.com/x2od/prettier-config/issues/29)) ([5c0baf1](https://github.com/x2od/prettier-config/commit/5c0baf1e4890cfa12f4d3c41ea66cc46ed293eba))


### Build System

* Pin dependencies to minor version ([f8ab5a5](https://github.com/x2od/prettier-config/commit/f8ab5a5fe40a069ed9622abcee35722bee2e48ae))
* **renovate:** Allow wide dependencies for Prettier plugins ([525a392](https://github.com/x2od/prettier-config/commit/525a392aa5ed4c9190a313908aab0d9d2b63162e))

## [0.0.5](https://github.com/x2od/prettier-config/compare/v0.0.4...v0.0.5) (2026-04-20)


### Features

* Attribute order changes for HTML ([e9a9169](https://github.com/x2od/prettier-config/commit/e9a9169b6528947ebd68c74f6047085cc04a4795))
* Configuration updates ([#20](https://github.com/x2od/prettier-config/issues/20)) ([e9a9169](https://github.com/x2od/prettier-config/commit/e9a9169b6528947ebd68c74f6047085cc04a4795))


### Miscellaneous Chores

* **prettier:** Update yaml quotes, require v3 ([7b2bcd1](https://github.com/x2od/prettier-config/commit/7b2bcd1348792ae41f659273c26e40b26ba4bbc5))
* **renovate:** Add renovate to auto-update dependencies ([782737b](https://github.com/x2od/prettier-config/commit/782737b13389ae8de04688a4afba277a289256ba))


### Documentation

* **README:** Update explanation of how to extend configuration ([e9a9169](https://github.com/x2od/prettier-config/commit/e9a9169b6528947ebd68c74f6047085cc04a4795))


### Continuous Integration

* **release-please:** Fix conditional to run steps ([e9a9169](https://github.com/x2od/prettier-config/commit/e9a9169b6528947ebd68c74f6047085cc04a4795))
* **release-please:** Use correct release-please action ([#22](https://github.com/x2od/prettier-config/issues/22)) ([2d7c5f9](https://github.com/x2od/prettier-config/commit/2d7c5f951f4a43d1414566aed9252409279bb81e))


### Build System

* Add prettier extender file for immediate testing ([e9a9169](https://github.com/x2od/prettier-config/commit/e9a9169b6528947ebd68c74f6047085cc04a4795))

## [0.0.4](https://github.com/x2od/prettier-config/compare/v0.0.3...v0.0.4) (2024-06-17)


### Features

* **html:** Put id first, then name, then default ([e317b43](https://github.com/x2od/prettier-config/commit/e317b43ca68be4b089a59471fd7e2c8ec3db2c29))


### Documentation

* **README:** Add disclaimer on extension quote ([e522243](https://github.com/x2od/prettier-config/commit/e522243d9064879a89c83c98efb0ab27a6c3051d))


### Build System

* Redo Prettier config files ([#9](https://github.com/x2od/prettier-config/issues/9)) ([bad7670](https://github.com/x2od/prettier-config/commit/bad76709831cc77df1b90fee50ab1b587f555677))

## [0.0.3](https://github.com/x2od/prettier-config/compare/v0.0.2...v0.0.3) (2024-06-16)


### Features

* Sort base config ([#7](https://github.com/x2od/prettier-config/issues/7)) ([48a9781](https://github.com/x2od/prettier-config/commit/48a97817b90fe2738c051ba8aa0a8c3d0f141ea1))
* Update dependencies and some config ([6f8a2a0](https://github.com/x2od/prettier-config/commit/6f8a2a039da8abf15dab7895d65346a9282e5351))


### Bug Fixes

* Apex-anonymous parser ([d5f21fa](https://github.com/x2od/prettier-config/commit/d5f21fa107242b3b64eedc8f7c811976f2d6c962))


### Build System

* **prettier:** Update yaml, visualforce ([#6](https://github.com/x2od/prettier-config/issues/6)) ([5c1ad19](https://github.com/x2od/prettier-config/commit/5c1ad190498429f674eebec6eadae7efd59022f4))

## [0.0.2](https://github.com/x2od/prettier-config/compare/v0.0.1...v0.0.2) (2024-03-29)


### Miscellaneous Chores

* Create LICENSE ([601d80f](https://github.com/x2od/prettier-config/commit/601d80f50270a5374855589ab183afeca041ce9e))


### Code Refactoring

* Include plugins in package ([#4](https://github.com/x2od/prettier-config/issues/4)) ([1654439](https://github.com/x2od/prettier-config/commit/1654439c841ea931b21364505612493fe3d666e4))


### Documentation

* Update README with examples ([1654439](https://github.com/x2od/prettier-config/commit/1654439c841ea931b21364505612493fe3d666e4))


### Continuous Integration

* Limit release-please plugin to pertinent file changes ([1654439](https://github.com/x2od/prettier-config/commit/1654439c841ea931b21364505612493fe3d666e4))
* Simplify release-please workflow ([88e8827](https://github.com/x2od/prettier-config/commit/88e8827d78771160147cb360d48e799a30fa650e))


### Build System

* Add organize-attributes plugin ([1654439](https://github.com/x2od/prettier-config/commit/1654439c841ea931b21364505612493fe3d666e4))

## [0.0.1](https://github.com/x2od/prettier-config/compare/v0.0.1...v0.0.1) (2024-03-28)


### Features

* Initial commit ([#1](https://github.com/x2od/prettier-config/issues/1)) ([19141ca](https://github.com/x2od/prettier-config/commit/19141ca68b7f87d7bd6248085a6c97decf7c652b))


### Miscellaneous Chores

* Release 0.0.1 ([1a47b2a](https://github.com/x2od/prettier-config/commit/1a47b2ad9596a467912f829cd5de0d9a7730424e))
