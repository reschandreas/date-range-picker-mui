const {
    defineConfig,
} = require("eslint/config");

const globals = require("globals");
const tsParser = require("@typescript-eslint/parser");
const typescriptEslint = require("@typescript-eslint/eslint-plugin");

module.exports = defineConfig([{
    languageOptions: {
        globals: {
            ...globals.browser,
            ...globals.node,
            Atomics: "readonly",
            SharedArrayBuffer: "readonly",
        },

        parser: tsParser,
        ecmaVersion: 2018,
        sourceType: "module",

        parserOptions: {
            ecmaFeatures: {
                jsx: true,
            },
        },
    },

    settings: {
        "import/resolver": {
            node: {
                paths: ["src"],
                extensions: [".js", ".ts", ".jsx", ".tsx"],
            },
        },
    },

    plugins: {
        "@typescript-eslint": typescriptEslint,
    },

    rules: {
        "no-use-before-define": "off",
        "@typescript-eslint/no-use-before-define": ["error"],
        "import/extensions": 0,
        "no-unused-vars": "warn",
    },
}]);
