/*global module */
module.exports = {
   'env': {
      'browser': true,
      'es2021': true,
      'jest': true
   },
   'extends': [
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:react-hooks/recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:i18next/recommended',
      'plugin:storybook/recommended'
   ],
   'settings': {
      'react': {
         'version': 'detect'
      }
   },
   'overrides': [
   ],
   'parser': '@typescript-eslint/parser',
   'parserOptions': {
      'ecmaVersion': 'latest',
      'sourceType': 'module'
   },
   'plugins': [
      'react',
      '@typescript-eslint',
      'i18next'
   ],
   'rules': {
      'react/jsx-indent': [
         'error',
         3
      ],
      'react/jsx-filename-extension': [
         'error',
         {
            'extensions': [
               '.js', '.jsx', 'tsx'
            ]
         }
      ],
      'react/react-in-jsx-scope': 'off',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'i18next/no-literal-string': [
         'error',
         {
            'markupOnly': true,
            'ignoreAttribute': [
               'data-testid'
            ]
         }
      ],
      'indent': [
         'error',
         3
      ],
      'react/jsx-props-no-spreading': 'warn',
      'linebreak-style': [
         0,
         'windows'
      ],
      'quotes': [
         'error',
         'single'
      ],
      'semi': [
         'error',
         'never'
      ],
      'max-len': [
         'error',
         {
            'ignoreComments': true,
            'code': 100
         }
      ],
      'react/display-name': 'off',
   },
   'globals': {
      __IS_DEV__: true,
      __API__: true
   },
   // eslint-disable-next-line no-dupe-keys
   'overrides': [
      {
         'files': [
            '**/src/**/*.{test,stories}.{ts,tsx}'
         ],
         'rules': {
            'i18next/no-literal-string': 'off',
            'max-len': 'off'
         }
      }
   ],
}
