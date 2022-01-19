module.exports = {
  stories: ['../packages/**/__stories__/*.stories.js'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  framework: '@storybook/react',
  core: {
    builder: 'webpack5',
  },
};
