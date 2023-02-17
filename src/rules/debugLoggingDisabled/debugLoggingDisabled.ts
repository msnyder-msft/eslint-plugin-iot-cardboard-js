import {AST_NODE_TYPES, TSESLint, TSESTree} from "@typescript-eslint/utils";
import {createRule} from "../../utils/createRule";

const DEBUG_LOGGER_CONST_NAME = "debugLogging";
const rule = createRule({
    name: "debug-logging-disabled",
    meta: {
        docs: {
            description: "Enforce that all debug logging is disabled",
            recommended: "error",
            requiresTypeChecking: false,
        },
        messages: {
            "disable-logging": "All debug logging should be disabled",
        },
        type: "problem",
        schema: {},
    },
    defaultOptions: [],
    create: function (
        context: Readonly<TSESLint.RuleContext<"disable-logging", never[]>>
    ) {
        return {
            VariableDeclaration(node) {
                const enabledLogger: TSESTree.VariableDeclarator[] = [];
                for (const element of node.declarations) {
                    if (
                        element.type === AST_NODE_TYPES.VariableDeclarator &&
                        element.id.type === AST_NODE_TYPES.Identifier &&
                        element.id.name === DEBUG_LOGGER_CONST_NAME &&
                        element.init?.type === AST_NODE_TYPES.Literal &&
                        element.init.value === true
                    ) {
                        enabledLogger.push(element);
                    }
                }
                if (enabledLogger.length > 0) {
                    for (const element of enabledLogger) {
                        context.report({
                            node: element,
                            messageId: "disable-logging",
                        });
                    }
                }
            },
        };
    },
});

export default rule;
