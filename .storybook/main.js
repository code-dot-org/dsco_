const webpackConfig = require('../webpack.config');

module.exports = {
  stories: ['../packages/**/__stories__/*.stories.js'],
  addons: [
    '@storybook/addon-a11y',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    'storybook-addon-performance/register',
    '@whitespace/storybook-addon-html',
    'storybook-addon-rtl',
  ],
  framework: '@storybook/react',
  core: {
    builder: 'webpack5',
  },
  webpackFinal: async (config) => {
    return {
      ...config,
      module: {
        ...config.module,
        // Replace default storybook rules with our webpack rules.
        rules: webpackConfig.module.rules,
      },
    };
  },
};
