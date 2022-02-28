const webpackConfig = require('../webpack.config');

module.exports = {
  stories: ['../packages/**/__stories__/*.stories.js'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
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
        rules: [...config.module.rules, ...webpackConfig.module.rules],
      },
    };
  },
};
