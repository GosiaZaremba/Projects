module.exports = {
    root: true,
    extends: ['plugin:@typescript-eslint/recommended'],
    parser: '@typescript-eslint/parser',
    // plugins: ['@typescript-eslint'],
    rules: { '@typescript-eslint/no-unused-vars': 'off' },
    overrides: [
        {
            files: ['*.ts', '*.tsx'],
            rules: {
                '@typescript-eslint/no-shadow': ['off'],
                'no-shadow': 'off',
                'no-undef': 'off',
                '@typescript-eslint/no-var-requires': 'off',
                '@typescript-eslint/no-explicit-any': 'off',
                '@typescript-eslint/ban-types': 'off',
            },
        },
    ],
    ignorePatterns: [
        'vendor/',
        'coverage/',
        'ios/',
        'android/',
        'setupTest.js',
        'node_modules/',
        '.bundle/',
    ],
};
