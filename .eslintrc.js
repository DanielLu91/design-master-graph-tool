module.exports = {
    parser: "@typescript-eslint/parser", // Specifies the ESLint parser
    extends: [
        "plugin:@typescript-eslint/recommended" // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    ],
    parserOptions: {
        ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
        sourceType: "module" // Allows for the use of imports
    },
    rules: {
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/explicit-function-return-type": "off",
        "object-literal-sort-keys": ["off"],
        "quotemark": ["off"],
        "ordered-imports": ["off"],
        "ban-types": ["off"],
        "no-unused-expression": ["off"],
        "object-literal-shorthand": ["off"],
        "no-trailing-whitespace": ["off"],
        "no-angle-bracket-type-assertion": ["off"],
        "max-classes-per-file": ["off"],
        "interface-name": ["off"],
        "no-empty-interface": ["off"],
        "interface-over-type-literal": ["off"],
        "no-shadowed-variable": ["off"],
        "no-eval": ["off"],
        "no-console": ["off"],
        "no-bitwise": ["off"],
        "unified-signatures": ["off"],
        "prefer-for-of": ["off"]
    }
};
