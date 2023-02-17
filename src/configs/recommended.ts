export = {
    parser: "@typescript-eslint/parser",
    parserOptions: {sourceType: "module"},
    rules: {
        "@darraghor/nestjs-typed/provided-injected-should-match-factory-parameters":
            "error",
    },
};
