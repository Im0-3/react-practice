var webpack = require('webpack');

module.exports = {
  context: __dirname + '/src',
  entry: {
    js: "./js/app.js"
  },
  output: {
    path: __dirname + '/dist',
    filename: "./js/app.js"
  },
  module: {
    loaders: [
      { test: "/\.html$/", loader: "html?minize" },
      {
        test:  /\.(js|jsx)$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  devServer: {
    contentBase: 'dist',
    port: 3000
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin()
  ]
}