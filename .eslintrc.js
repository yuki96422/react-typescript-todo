module.exports = {
  // env: {
  //   browser: true,
  //   es2021: true
  // },
  // extends: [
  //   'plugin:react/recommended',
  //   'standard-with-typescript'
  // ],
  // overrides: [
  // ],
  // parserOptions: {
  //   ecmaVersion: 'latest',
  //   sourceType: 'module'
  // },
  // plugins: [
  //   'react'
  // ],
  // rules: {
  // }
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    //'plugin:react/recommended', airbnbにほど設定されているので削除可能
    'airbnb',
    'airbnb-typescript', //追加
    'airbnb/hooks', //追加
    'plugin:@typescript-eslint/recommended', //型を必要としないプラグインの推奨ルールをすべて有効
    'plugin:@typescript-eslint/recommended-requiring-type-checking', //型を必要とするプラグインの推奨ルールをすべて有効
    'prettier', //追加 ESLintの情報に沿ってフォーマット
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12, //latestから12に変更
    sourceType: 'module',
    tsconfigRootDir: __dirname, //追加 tsconfig.jsonがある相対パスを指定
    project: ['./tsconfig.json'], //追加  tsconfig.jsonを指定
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'unused-imports', //追加 使っていないimportを自動で削除用
  ],
  ignorePatterns: ['build'],
};
