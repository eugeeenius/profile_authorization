module.exports = {
  root: true,
  env: {
    node: true,
  },
  'extends': [
    'plugin:vue/essential',
    'eslint:recommended',
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'indent': ['warn', 2],
    'semi': [2, 'always'],
    'comma-dangle': [
      2,
      {
        'objects': 'always-multiline',
        'arrays': 'always-multiline',
      },
    ],
    'no-unused-vars': "off",
  },
};
