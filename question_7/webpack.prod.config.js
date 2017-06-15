const webpack = require('webpack')
const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const environnementVars = {
  NODE_ENV: JSON.stringify('production')
}

const buildDirectory = 'build';

module.exports = {
  entry: {
    app: ['babel-polyfill', './src/index.js']
  },
  output: {
    filename: `${buildDirectory}/[name].js`
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        enforce: 'pre',
        exclude: /node_modules/,
        use: ['babel-loader']
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
    new webpack.DefinePlugin(environnementVars),
    new CleanWebpackPlugin(['build/*.*']),
    new CopyWebpackPlugin([
      { from: `./index.html`, to: `${buildDirectory}/index.html` },
    ])
  ],
}
