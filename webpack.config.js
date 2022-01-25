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
      {
        test: /\.scss$/i,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              esModule: true,
              modules: {
                auto: true,
                namedExport: true,
              },
            },
          },
          'postcss-loader',
          'sass-loader',
        ],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', '.scss'],
  },
  // Target and webpack-node-externals are required to exclude node_modules from package bundles.
  target: 'node',
  externals: [nodeExternals()],
};
