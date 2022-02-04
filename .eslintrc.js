module.exports = {
  'parser': '@babel/eslint-parser',
  'globals': {},
  'env': {
    'jest': true,
    'browser': true,
    'es6': true,
  },
  'plugins': [
    '@babel',
    'react',
    'jest'
  ],
  'rules': {
    'max-len': [1, 220, 2, {'ignoreComments': true}],
    '@babel/new-cap': 'error',
    '@babel/no-invalid-this': 'error',
    '@babel/no-unused-expressions': 'error',
    '@babel/object-curly-spacing': 'error',
    '@babel/semi': 'error',
    'react/prop-types': ['error'],
    'react/forbid-prop-types': ['error', {forbid: ['any', 'array']}],
    'react/prefer-stateless-function': ['error', {'ignorePureComponents': true}],
    'react/require-render-return': 'error',
    'react/no-string-refs': ['error'],
    'quotes': [2, 'single', {'avoidEscape': true, 'allowTemplateLiterals': true}],
    'jsx-quotes': [2, 'prefer-double'],
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
    "indent": ["error", 4]
  },
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended'
  ],
  'parserOptions': {
    'ecmaVersion': 6,
    'sourceType': 'module',
    'allowImportExportEverywhere': true,
    'requireConfigFile': false,
    'ecmaFeatures': {
      'globalReturn': false,
      'jsx': true
    },
    'babelOptions': {
      'plugins': [
        '@babel/plugin-proposal-class-properties'
      ],
      'presets': [
        '@babel/env',
        '@babel/react'
      ]
    }
  },
  'settings': {
    "react": {
      "createClass": "createReactClass", // Regex for Component Factory to use,
                                         // default to "createReactClass"
      "pragma": "React",  // Pragma to use, default to "React"
      "fragment": "Fragment",  // Fragment to use (may be a property of <pragma>), default to "Fragment"
      "version": "detect", // React version. "detect" automatically picks the version you have installed.
                           // You can also use `16.0`, `16.3`, etc, if you want to override the detected value.
                           // It will default to "latest" and warn if missing, and to "detect" in the future
      "flowVersion": "0.53" // Flow version
    },
    "propWrapperFunctions": [
      // The names of any function used to wrap propTypes, e.g. `forbidExtraProps`. If this isn't set, any propTypes wrapped in a function will be skipped.
      "forbidExtraProps",
      {"property": "freeze", "object": "Object"},
      {"property": "myFavoriteWrapper"},
      // for rules that check exact prop wrappers
      {"property": "forbidExtraProps", "exact": true}
    ],
    "componentWrapperFunctions": [
      // The name of any function used to wrap components, e.g. Mobx `observer` function. If this isn't set, components wrapped by these functions will be skipped.
      "observer", // `property`
      {"property": "styled"}, // `object` is optional
      {"property": "observer", "object": "Mobx"},
      {"property": "observer", "object": "<pragma>"} // sets `object` to whatever value `settings.react.pragma` is set to
    ],
    "linkComponents": [
      // Components used as alternatives to <a> for linking, eg. <Link to={ url } />
      "Hyperlink",
      {"name": "Link", "linkAttribute": "to"}
    ]
  }
};