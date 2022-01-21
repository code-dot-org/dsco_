const babelConfig = require('./babel.config');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  output: {
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: babelConfig,
        },
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  // Target and webpack-node-externals are required to exclude node_modules from package bundles.
  target: 'node',
  externals: [nodeExternals()],
};
