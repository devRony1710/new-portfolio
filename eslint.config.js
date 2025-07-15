import js from '@eslint/js';
import pluginReact from 'eslint-plugin-react';
import pluginPrettier from 'eslint-plugin-prettier';
import importPlugin from 'eslint-plugin-import';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  {
    ...js.configs.recommended,
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true
        }
        // project: './tsconfig.json',
      },
      globals: {
        window: 'readonly',
        document: 'readonly'
      }
    },
    plugins: {
      react: pluginReact,
      '@typescript-eslint': tseslint,
      prettier: pluginPrettier,
      import: importPlugin
    },
    rules: {
      // Reglas recomendadas de React
      ...pluginReact.configs.recommended.rules,

      // Reglas recomendadas de TypeScript
      ...tseslint.configs.recommended.rules,

      // Prettier
      'prettier/prettier': 'error',

      // Ejemplo regla de import
      'import/no-default-export': 'off',
      'react/react-in-jsx-scope': 'off'

      // Opcional: tus reglas personalizadas aquí
    },
    settings: {
      react: {
        version: 'detect'
      }
    }
  }
]);
