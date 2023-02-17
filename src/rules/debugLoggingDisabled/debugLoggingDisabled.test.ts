import {ESLintUtils} from "@typescript-eslint/utils";
import rule from "./debugLoggingDisabled";

const ruleTester = new ESLintUtils.RuleTester({
    parser: "@typescript-eslint/parser",
});

ruleTester.run("debug-logging-disabled", rule, {
    valid: [
        {
            code: `
import { A } from 'class-validator';
const debugLogging = false;
class A {
  @A
  b: string
}
        `,
        },
    ],
    invalid: [
        {
            code: `
import { Allow } from 'class-validator';
const debugLogging = true;
class MyClass {
  @Allow()
  b: string

  b: string
}
    `,
            errors: [
                {
                    messageId: "disable-logging",
                },
            ],
        },
    ],
});
