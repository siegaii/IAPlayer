module.exports = {
    env: {
        browser: true,
        es6: true,
        node: true
    },
    extends: ['airbnb-base', 'plugin:prettier/recommended'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 11,
        sourceType: 'module'
    },
    plugins: ['@typescript-eslint'],
    rules: {
        'no-unused-expressions': 0
    }
};
