import js from '@eslint/js'
import prettier from 'eslint-config-prettier'
import eslintPluginPrettier from 'eslint-plugin-prettier/recommended'

const isDevelopment = process.env.NODE_ENV !== 'production'

export default [
  js.configs.recommended,
  prettier,
  eslintPluginPrettier,
  {
    files: ['**/*.{js,ts,vue}'],
    ignores: ['dist/**', 'node_modules/**', '.wxt/**', 'coverage/**', '.history/**'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        console: 'readonly',
        chrome: 'readonly',
      },
    },
    rules: {
      'no-unused-vars': 'warn',
      'no-console': isDevelopment ? 'off' : 'warn',
      'no-debugger': isDevelopment ? 'off' : 'warn',
    },
    parserOptions: {
      project: './tsconfig.json',
      tsconfigRootDir: __dirname,
    },
  },
]
