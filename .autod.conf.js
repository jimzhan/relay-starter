module.exports = {
  write: true,
  prefix: '~',
  devprefix: '^',
  dep: [
    'antd',
    'browserslist',
    'cross-env',
    'per-env',
    'react',
    'react-dom',
    'react-app-rewired',
    'react-app-rewire-less',
    'react-scripts',
    'rimraf',
  ],
  devdep: [
    '@commitlint/cli',
    '@commitlint/config-conventional',
    'babel-plugin-import',
    'commitizen',
    'cz-conventional-changelog',
    'eslint',
    'eslint-config-airbnb',
    'eslint-plugin-import',
    'eslint-plugin-jest',
    'eslint-plugin-jsx-a11y',
    'eslint-plugin-react',
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
