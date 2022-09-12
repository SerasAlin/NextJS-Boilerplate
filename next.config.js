// eslint-disable-next-line @typescript-eslint/no-var-requires
const nextEnv = require('next-env');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const dotenvLoad = require('dotenv-load');

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { i18n } = require('./next-i18next.config');

dotenvLoad();

const withNextEnv = nextEnv();

module.exports = withNextEnv({
  i18n,
  reactStrictMode: true
});
