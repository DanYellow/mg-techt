const path = require('path');
const webpack = require('webpack');

const NpmInstallPlugin = require('npm-install-webpack-plugin');

const environnementVars = {
  NODE_ENV: JSON.stringify('development')
}

module.exports = {
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  },
  entry: {
    app: './src/index.js'
  },
  output: {
    filename: './[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      }
    ],
  },
  resolve: {
    modules: [
      path.resolve('./src'),
      'node_modules'
    ],
    extensions: ['.js']
  },
  plugins: [
    new webpack.SourceMapDevToolPlugin({
      filename: './[name].js.map',
    }),
    new webpack.DefinePlugin(environnementVars),
    new NpmInstallPlugin(),
  ]
}
