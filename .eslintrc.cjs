module.exports = {
  env: {
    browser: true,
    es6: true,
    es2021: true,
  },
  settings: {
    'import/resolver': {
      typescript: {
        project: './',
      },
      alias: {
        extensions: ['.json', '.ts', '.tsx'],
        map: [['@', './src']],
      },
    },
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'prettier',
    'plugin:storybook/recommended',
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: ['react', '@typescript-eslint', 'import', 'unused-imports'],
  rules: {
    '@typescript-eslint/array-type': 2, // Array<foo>をfoo[]に統一
    '@typescript-eslint/consistent-type-definitions': ['error', 'type'], // interfaceではなくtypeに統一
    '@typescript-eslint/consistent-type-imports': ['warn', { prefer: 'type-imports' }],
    '@typescript-eslint/explicit-function-return-type': [
      'error',
      { allowExpressions: true, allowTypedFunctionExpressions: true },
    ],
    '@typescript-eslint/method-signature-style': 'error', // オブジェクトの関数型のプロパティ宣言にmethod signature（挙動が双変）を禁止
    '@typescript-eslint/no-namespace': 'off',
    // '@typescript-eslint/no-unused-vars': 'off', // unused-importsと重複
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'import/no-default-export': 'error',
    'import/no-extraneous-dependencies': [
      'error',
      { devDependencies: ['**/.storybook/**', '**/src/stories/**', '**/tests/**'] },
    ],
    // importの自動整理
    'import/order': [
      'error',
      {
        alphabetize: {
          order: 'asc', // 昇順にソート
          caseInsensitive: true, // 小文字大文字を区別
        },

        pathGroups: [
          // 指定した順番にソートされる
          // {
          //   pattern: '@/components/common',
          //   group: 'internal',
          //   position: 'before',
          // },
          // {
          //   pattern: '@/components/hooks',
          //   group: 'internal',
          //   position: 'before',
          // },
        ],
      },
    ],
    'consistent-return': 'off',
    'import/no-duplicates': 'error',
    'import/prefer-default-export': 'off',
    'no-case-declarations': 'off',
    'no-nested-ternary': 'off',
    'no-void': ['error', { allowAsStatement: true }], // floating-promiseの処理用
    'react/function-component-definition': [
      2,
      { namedComponents: 'arrow-function', unnamedComponents: 'arrow-function' },
    ],
    'react/jsx-no-useless-fragment': ['error', { allowExpressions: true }],
    'react/jsx-props-no-spreading': 'off',
    'react/prop-types': 'off', // TypeScriptで不要
    'react/react-in-jsx-scope': 'off', // React17以降不要
    'react/require-default-props': 'off', // TypeScriptで不要
    'unused-imports/no-unused-imports': 'error',
  },
};
