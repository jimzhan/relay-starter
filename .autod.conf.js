module.exports = {
  write: true,
  prefix: '~',
  devprefix: '^',
  dep: [
    'antd',
    'autoprefixer',
    'browserslist',
    'cross-env',
    'graphql',
    'per-env',
    'react',
    'react-dom',
    'react-app-rewired',
    'react-app-rewire-less',
    'react-relay',
    'react-scripts',
    'relay-compiler',
    'rimraf',
  ],
  devdep: [
    '@commitlint/cli',
    '@commitlint/config-conventional',
    'babel-plugin-import',
    'babel-plugin-relay',
    'commitizen',
    'cz-conventional-changelog',
    'eslint',
    'eslint-config-airbnb',
    'eslint-plugin-import',
    'eslint-plugin-jest',
    'eslint-plugin-jsx-a11y',
    'eslint-plugin-react',
    'fb-watchman',
    'husky',
    'jest',
    'lint-staged',
  ],
  semver: [
    'eslint@4.19.1',
  ],
  /* ------------------------------------------------------------
   * `lerna` based packages require manual installation via npm registry.
   * @SEE https://github.com/node-modules/autod/issues/34
   * ------------------------------------------------------------*/
  registry: 'https://registry.npm.taobao.org',
}
