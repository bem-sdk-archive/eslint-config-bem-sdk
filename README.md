eslint-config-bem-sdk
=====================

An ESLint [Shareable Config](http://eslint.org/docs/developer-guide/shareable-configs) for [BEM SDK](https://github.com/bem-sdk/) packages.

[![NPM Status][npm-img]][npm]
[![Travis Status][test-img]][travis]

[npm]:          https://www.npmjs.org/package/eslint-config-bem-sdk
[npm-img]:      https://img.shields.io/npm/v/eslint-config-bem-sdk.svg

[travis]:       https://travis-ci.org/blond/eslint-config-bem-sdk
[test-img]:     https://img.shields.io/travis/blond/eslint-config-bem-sdk.svg?label=tests

Install
-------

You'll first need to install ESLint:

```
$ npm install eslint --save-dev
```

**Note**: You may install ESLint globally using the `-g` flag.

Next, install `eslint-config-bem-sdk`:

```
$ npm install eslint-config-bem-sdk --save-dev
```

**Note**: If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-config-bem-sdk` globally.

A globally-installed instance of ESLint can only use globally-installed ESLint plugins. A locally-installed ESLint can make use of both locally- and globally- installed ESLint plugins.

Usage
-----

Shareable configs are designed to work with the `extends` feature of `.eslintrc` files. You can learn more about [Shareable Config](http://eslint.org/docs/developer-guide/shareable-configs) on the official ESLint website.

Add this to your `.eslintrc.json` file:

```json
{
  "extends": "bem-sdk"
}
```

**Note**: We omitted the `eslint-config-` prefix since it is automatically assumed by ESLint.

You can override settings from the shareable config by adding them directly into your `.eslintrc.json` file.

Environment
-----------

Now BEM SDK modules are used in assembly systems and `bem-tools` plugins. Therefore, the modules support `Node.js` only.

So the rules are suitable for `ECMAScript 6` or higher and designed for code that is executed in `Node.js@4+`.

Presets
-------

The rules divided to presets to ensure that you could run the important checks separately from to check your codestyle. This is useful during development.

Run important checks before running tests and check your codestyle after running tests.

```json
{
  "scripts": {
    "pretest": "npm run lint:node && npm run lint:test",
    "posttest": "npm run lint:style",
    "lint:node": "eslint . --no-eslintrc --config=bem-sdk/node",
    "lint:test": "eslint test/ --no-eslintrc --config=bem-sdk/test",
    "lint:style": "eslint . --no-eslintrc --config=bem-sdk/style",
  }
}
```

### Node

The rules to find errors, typos and potentially dangerous code (possible errors, best practices, etc) are suitable for `Node.js@4+`.

Use `node` preset in the `scripts` section of `package.json` file:

```json
{
  "scripts": {
    "lint:node": "eslint . --no-eslintrc --config=bem-sdk/node"
  }
}
```

You can override rules in modules only in specific cases. For example, your module is logging (use `console.log`), then you can disable `no-console` rule.

### Style

The rules to check code style (stylistic issues, etc).

This preset intentionally does limit your choice of code style to support codebase of BEM SDK modules in the consistent condition.

Use `style` preset in the `scripts` section of `package.json` file:

```json
{
  "scripts": {
    "lint:style": "eslint . --no-eslintrc --config=bem-sdk/style"
  }
}
```

It is not recommended to override style rules in modules.

### Test

The rules to find errors, typos and potentially dangerous code in tests (possible errors, best practices, etc).

Now BEM SDK modules are use [AVA](ava) test runner. So basically `test` preset contains rules from [eslint-plugin-ava](ava-plugin).

[ava]: https://github.com/avajs/ava
[ava-plugin]: https://github.com/avajs/eslint-plugin-ava

Use `test` preset in the `test/.eslintrc.json` file:

```json
{
  "extends": "bem-sdk/test"
}
```

IDE support
-----------

To IDE supports all rules (`node` and `style`) use default preset in the `.eslintrc.json` file:

```json
{
  "extends": "bem-sdk"
}
```

To run presets separately ignore your `.eslintrc.json` file in npm scripts with `--no-eslintrc` option.

Other plugins
-------------

In addition, we recommend you lint `.md` and `.json` files.

To do this, use the following packages:

* [eslint-plugin-json](https://github.com/azeemba/eslint-plugin-json)
* [eslint-plugin-markdown](https://github.com/eslint/eslint-plugin-markdown)

**Example**

```json
{
  "scripts": {
    "lint:md": "eslint . --plugin=markdown --ext=.md --config=bem-sdk/style",
    "lint:json": "eslint . --no-eslintrc --plugin=json --ext=.json"
  }
}
```

Semantic Versioning Policy
--------------------------

The `eslint-config-pedant` follows [semantic versioning](semver) and [ESLint's Semantic Versioning Policy](eslint-semver).

[semver]: http://semver.org
[eslint-semver]: https://github.com/eslint/eslint#semantic-versioning-policy

However, due to the nature of `ESLint`, it's not always clear when a minor or major version bump occurs. To help clarify this for everyone, `ESLint` defined the following semantic versioning policy:

* Patch release (intended to not break your lint build)
    * A bug fix in a rule options that results in ESLint reporting fewer errors.
    * Improvements to documentation.
    * Non-user-facing changes such as refactoring code, modifying tests, and increasing examples coverage.
    * Re-releasing after a failed release (i.e., publishing a release that doesn't work for anyone).
    * An existing rule is replaced (if rule is deprecated) that results in ESLint reporting fewer errors.
* Minor release (might break your lint build)
    * A bug fix in a rule options that results in ESLint reporting more errors.
    * An existing rule is replaced (if rule is deprecated) that results in ESLint reporting more errors.
    * A new rule is added that does not result in ESLint reporting more errors by default.
    * A new option to an existing rule is added that does not result in ESLint reporting more errors by default.
    * New capabilities to the public API are added (new presets, etc.).
* Major release (likely to break your lint build)
    * A new rule is added that results in ESLint reporting more errors by default.
    * A new option to an existing rule is added that results in ESLint reporting more errors by default.
    * An existing rule is removed (if rule is not deprecated).
    * Part of the public API is removed or changed in an incompatible way (removed presets, etc.).

According to our policy, any minor update may report more errors than the previous release (ex: from a bug fix). As such, we recommend using the tilde (`~`) in `package.json` e.g. `"eslint-config-bem-sdk": "~0.8.0"` to guarantee the results of your builds.

License
-------

Code and documentation © 2017 YANDEX LLC. Code released under the Mozilla Public License 2.0.
