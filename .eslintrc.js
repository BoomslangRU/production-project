// eslint-disable-next-line no-undef
module.exports = {
   'env': {
      'browser': true,
      'es2021': true
   },
   'extends': [
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:@typescript-eslint/recommended'
   ],
   'overrides': [
   ],
   'parser': '@typescript-eslint/parser',
   'parserOptions': {
      'ecmaVersion': 'latest',
      'sourceType': 'module'
   },
   'plugins': [
      'react',
      '@typescript-eslint'
   ],
   'rules': {
      'react/jsx-indent': [
         'error',
         3
      ],
      'react/jsx-filename-extension': [
         'error',
         {
            extensions: [
               '.js', '.jsx', 'tsx'
            ]
         }
      ],
      'react/react-in-jsx-scope': 'off',
      'indent': [
         'error',
         3
      ],
      'react/jsx-props-no-spreading': 'warn',
      'linebreak-style': [
         'error',
         'windows'
      ],
      'quotes': [
         'error',
         'single'
      ],
      'semi': [
         'error',
         'never'
      ]
   }
}
