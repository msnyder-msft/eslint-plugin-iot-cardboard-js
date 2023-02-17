![npm](https://img.shields.io/npm/v/@microsoft/eslint-plugin-cardboard-iot-js.svg?color=red)
![npm-tag](https://badgen.net/github/tag/darraghoriordan/eslint-plugin-nestjs-typed)

## Why use this package?

This package is really only intended to be used by the @microsoft/iot-cardboard-js project to enforce the custom styling rules for that project.

## To install

```ts
npm install --save-dev @microsoft/eslint-plugin-cardboard-iot-js

// or

yarn add -D @microsoft/eslint-plugin-cardboard-iot-js
```

Then update your eslint with the plugin import and add the recommended rule set

```ts
module.exports = {
    env: {
        es6: true,
    },
    extends: ["plugin:iot-cardboard-js/recommended"],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        project: ["./tsconfig.json"],
        sourceType: "module",
        ecmaVersion: "es2019",
    },
    plugins: ["iot-cardboard-js"],
};
```

## Rule Details

### Rule: debug-logging-disabled

This rule checks that any constant named with the value `debugLogging` has a value of `false`

This PASSES - all properties are decorated correctly

```ts
const debugLogging = false;
```

This FAILS - because the value is `true`

```ts
const debugLogging = true;
```
