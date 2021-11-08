module.exports = {
  plugins: ['react', 'jsx-a11y', 'prettier', '@typescript-eslint', 'simple-import-sort'],
  extends: ['next/core-web-vitals', 'plugin:@typescript-eslint/recommended', 'prettier'],
  rules: {
    // I suggest you add those two rules:
    // prettier
    'prettier/prettier': ['error'],
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/no-explicit-any': 'warn',
  },
};
