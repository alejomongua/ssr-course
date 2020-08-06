module.exports = {
    env: {
        browser: true,
        es2020: true,
        node: true
    },
    settings: {
        react: {
           version: 'detect'
        }
    },
    extends: [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 11,
        sourceType: "module"
    },
    plugins: [
        "react"
    ],
    rules: {
        'comma-dangle': 0
    }
};
