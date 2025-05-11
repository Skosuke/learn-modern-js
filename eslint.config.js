import js from '@eslint/js';
import importPlugin from 'eslint-plugin-import';
import prettier from 'eslint-config-prettier';

export default [
  js.configs.recommended,
  {
    plugins: {
      import: importPlugin,
    },
    rules: {
      'no-console': 'off',
      'import/no-unresolved': 'off',
    },
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
      globals: {
        console: 'readonly',
        document: 'readonly',
        navigator: 'readonly',
        window: 'readonly',
        test: 'readonly',
        expect: 'readonly',
      },
    },
  },
  prettier,
];
