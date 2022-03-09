module.exports = {
    extends: [
        "airbnb",
        "airbnb-typescript",
        "airbnb/hooks",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "prettier"
    ],
    "parser": "@typescript-eslint/parser",
    parserOptions: {
        "project": "./tsconfig.json"
    },
    rules: {
        "react/jsx-filename-extension": [0],
        "import/no-unresolved": "off",
        "import/extensions": "off",
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "warn",
        "no-return-assign": "off",
        "no-param-reassign": "off",
        "func-names": "off",
        "@typescript-eslint/no-unused-expressions": "off",
        "no-unused-expressions": "off",
        "import/no-extraneous-dependencies": "off",
        "import/no-duplicates": "off",
        "import/order": "off",
        "import/no-self-import": "off",
        "import/no-cycle": "off",
        "import/no-relative-packages": "off",
        "import/prefer-default-export": "off",
        "no-restricted-syntax": "off",
        "import/no-named-as-default": "off",
        "import/no-named-as-default-member": "off",
        "import/no-useless-path-segments": "off",
        "@typescript-eslint/naming-convention": "off",
        "react/react-in-jsx-scope": "off",
        "no-underscore-dangle": "off",
        "react/require-default-props": "off",
        "react/destructuring-assignment": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-unsafe-member-access": "off",
        "@typescript-eslint/no-unsafe-assignment": "off",
        "@typescript-eslint/no-unsafe-return": "off",
        "@typescript-eslint/no-floating-promises": "off",
        "@typescript-eslint/no-unsafe-argument": "off",
        "@typescript-eslint/restrict-template-expressions": "off"
    }
}