import eslintPluginPrettier from "eslint-plugin-prettier";
import typescriptEslintPlugin from "@typescript-eslint/eslint-plugin";
import typescriptEslintParser from "@typescript-eslint/parser";
import eslintPluginImport from "eslint-plugin-import";
import eslintPluginImportHelpers from "eslint-plugin-import-helpers";
import eslintPluginNode from "eslint-plugin-node";
import eslintPluginPromise from "eslint-plugin-promise";

export default [
    {
        ignores: ["node_modules/", "dist/", "build/"],
    },
    {
        files: ["**/*.ts", "**/*.tsx"], // Apply this config to TypeScript files
        languageOptions: {
            parser: typescriptEslintParser,
            parserOptions: {
                ecmaVersion: 2016,
                sourceType: "module",
            },
        },
        plugins: {
            "@typescript-eslint": typescriptEslintPlugin,
            prettier: eslintPluginPrettier,
            import: eslintPluginImport,
            "import-helpers": eslintPluginImportHelpers,
            node: eslintPluginNode,
            promise: eslintPluginPromise,
        },
        rules: {
            "prettier/prettier": "error",
            "@typescript-eslint/no-unused-vars": [
                "error",
                { argsIgnorePattern: "^_" },
            ],
            "@typescript-eslint/explicit-function-return-type": "off",
            "@typescript-eslint/no-explicit-any": "off",
            // "@typescript-eslint/ban-types": [
            //     "error",
            //     {
            //         types: {
            //             "{}": false,
            //         },
            //     },
            // ],
            "@typescript-eslint/ban-ts-comment": "warn",
            "import/no-unresolved": "error", // Example of import plugin rule
            "import-helpers/order-imports": [
                "warn",
                {
                    newlinesBetween: "always",
                    groups: [
                        "/^react/",
                        "module",
                        "/^@/",
                        "/^~/",
                        "parent",
                        "sibling",
                        "index",
                    ],
                },
            ],
            "node/no-missing-import": "error", // Example of node plugin rule
            "promise/always-return": "warn", // Example of promise plugin rule
        },
    },
    {
        files: ["**/*.js"], // Apply to JavaScript files
        languageOptions: {
            ecmaVersion: 2016,
            sourceType: "module",
        },
        plugins: {
            import: eslintPluginImport,
            "import-helpers": eslintPluginImportHelpers,
            node: eslintPluginNode,
            promise: eslintPluginPromise,
            prettier: eslintPluginPrettier,
        },
        rules: {
            "prettier/prettier": "error", // Include Prettier for JS files if needed
            "import/no-unresolved": "error", // Example of import plugin rule
            "import-helpers/order-imports": [
                "warn",
                {
                    newlinesBetween: "always",
                    groups: [
                        "/^react/",
                        "module",
                        "/^@/",
                        "/^~/",
                        "parent",
                        "sibling",
                        "index",
                    ],
                },
            ],
            "node/no-missing-import": "error", // Example of node plugin rule
            "promise/always-return": "warn", // Example of promise plugin rule
        },
    },
];
