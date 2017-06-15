const webpack = require('webpack')
const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
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
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ['css-loader',
            {
              loader: 'postcss-loader',
            }
          ]
        })
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
      { from: `static/index.html`, to: `${buildDirectory}/index.html` },
    ])
  ],
}
