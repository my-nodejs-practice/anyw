module.exports = {
  env: {
    es6: true, // this automatically sets the ecmaVersion parser option to 6
    browser: false,
    node: true
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6, // default: 5
    sourceType: 'script' // default
  },
  extends: 'eslint:recommended',
  rules: {
    indent: ['error', 2],
    'linebreak-style': ['error', 'unix'],
    'no-console': [
      'error',
      {
        allow: ['warn', 'error', 'info']
      }
    ],
    quotes: ['error', 'single'],
    semi: ['error', 'always']
  }
};
