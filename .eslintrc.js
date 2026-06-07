module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'google'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'quotes': 'off',
    'max-len': [2, { code: 180, tabWidth: 2, ignoreUrls: true }],
    'object-curly-newline': 'off',
    'object-curly-spacing': ['error', 'always'],
    'eol-last': 'off',
    'valid-jsdoc': 'off',
    'react/prop-types': 'off',
    'require-jsdoc': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
