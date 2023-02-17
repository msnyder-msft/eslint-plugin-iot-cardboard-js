![commit](https://badgen.net/github/last-commit/darraghoriordan/eslint-plugin-nestjs-typed/main)
![npm](https://img.shields.io/npm/v/@darraghor/eslint-plugin-nestjs-typed.svg?color=red)
![npm-tag](https://badgen.net/github/tag/darraghoriordan/eslint-plugin-nestjs-typed)
![size](https://badgen.net/bundlephobia/minzip/@darraghor/eslint-plugin-nestjs-typed?color=cyan)
![types](https://badgen.net/npm/types/@darraghor/eslint-plugin-nestjs-typed?color=blue)

## Why use this package?

This package is really only intended to be used by the @microsoft/iot-cardboard-js project to enforce the custom styling rules for that project.

## To install

```
npm install --save-dev @darraghor/eslint-plugin-nestjs-typed

// or

yarn add -D @darraghor/eslint-plugin-nestjs-typed
```

Then update your eslint with the plugin import and add the recommended rule set

```ts
module.exports = {
    env: {
        es6: true,
    },
    extends: ["plugin:@darraghor/nestjs-typed/recommended"],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        project: ["./tsconfig.json"],
        sourceType: "module",
        ecmaVersion: "es2019",
    },
    plugins: ["@darraghor/nestjs-typed"],
};
```

## Rule Details

### Rule: all-properties-have-explicit-defined

This rule checks that all properties of a class have an appropriate `@IsDefined()` or `@IsOptional()` decorator.

This rule also checks that both `@IsDefined()` and `@IsOptional()` are not used on the same property because this doesn't make sense.

The rule will ignore any classes that have 0 class-validator decorators. This is to avoid errors for classes that are not used for validation.

This PASSES - all properties are decorated correctly

```ts
export class CreateOrganisationDto {
    @IsDefined()
    otherProperty!: MyClass;

    @IsOptional()
    someStringProperty?: string;
}
```

This PASSES - no class validator decorators are used

```ts
export class CreateOrganisationDto {
    otherProperty!: MyClass;

    someStringProperty?: string;
}
```

This FAILS - missing `@IsOptional()` on `someStringProperty`

```ts
export class CreateOrganisationDto {
    @IsDefined()
    otherProperty!: MyClass;
    @IsString()
    someStringProperty?: string;
}
```
