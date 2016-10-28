const webpack = require('webpack');

module.exports = {
  entry: './src/server/app.js',
  output : {
    path: './bin',
    filename: 'app.bundle.js'
  },
  module: {
    loaders : [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
      }
    ]
  },
  ////////////////////////
  // Minification
  // plugins: [
  //   new webpack.optimize.UglifyJsPlugin({
  //     compress: {
  //       warnings: false,
  //     },
  //     output: {
  //       comments: false,
  //     },
  //   })
  // ]
}