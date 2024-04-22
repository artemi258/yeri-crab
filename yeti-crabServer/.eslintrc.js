module.exports = {
 parser: '@typescript-eslint/parser',
 parserOptions: {
  project: 'tsconfig.json',
  tsconfigRootDir: __dirname,
  sourceType: 'module',
 },
 plugins: ['@typescript-eslint/eslint-plugin'],
 extends: [
  'eslint:recommended',
  'plugin:@typescript-eslint/eslint-recommended',
  'plugin:@typescript-eslint/recommended',
  'plugin:prettier/recommended',
 ],
 root: true,
 env: {
  node: true,
  jest: true,
 },
 ignorePatterns: ['.eslintrc.js'],
 rules: {
  '@typescript-eslint/ban-types': 'off',
  '@typescript-eslint/no-unused-vars': ['off'],
  '@typescript-eslint/no-explicit-any': 'off',
  'prettier/prettier': [
   'error',
   {
    singleQuote: true,
    useTabs: false,
    semi: true,
    trailingComma: 'all',
    bracketSpacing: true,
    printWidth: 100,
    endOfLine: 'auto',
    tabWidth: 1,
    jsxSingleQuote: true,
    bracketSameLine: true,
   },
  ],
 },
};
