const babelConfig = require('./babel.config');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: './lib/index.js',
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
                localIdentName: 'dsco-[local]-[hash:base64]',
              },
            },
          },
          'postcss-loader',
          {
            loader: 'sass-loader',
            options: {
              implementation: require('sass'),
            },
          },
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
