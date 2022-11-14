// eslint-disable-next-line
const a11yOff = Object.keys(require('eslint-plugin-jsx-a11y').rules).reduce((acc, rule) => {
  acc[`jsx-a11y/${rule}`] = 'off';
  return acc;
}, {});

module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['plugin:react/recommended', 'airbnb', 'airbnb-typescript', 'prettier', 'airbnb/hooks'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: './',
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx']
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        project: 'tsconfig.json'
      }
    }
  },
  plugins: ['react', '@typescript-eslint', 'import'],
  overrides: [
    {
      files: ['**/redux/**'],
      rules: {
        'no-param-reassign': ['error', { props: true, ignorePropertyModificationsFor: ['state'] }]
      }
    },
    {
      files: ['**/*.tsx'],
      rules: {
        ...a11yOff,
        'react/require-default-props': 'off',
        'react/jsx-props-no-spreading': 'off'
      }
    }
  ],
  rules: {
    '@typescript-eslint/comma-dangle': 0,
    'react/function-component-definition': 0,
    'react/button-has-type': 0
  }
};
