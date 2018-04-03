const path = require('path');

const serverPort = process.env.PORT || 3000

module.exports = {
  mode: 'development',
  entry: './src/client/javascripts/index.js',
  output: {
    path: path.join(__dirname, '../../www'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['react', 'babel-preset-env'],
        }
      },
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, '../../www'),
    open: true,
    proxy: {
      '/api': `http://localhost:${serverPort}`,
    },
  },
}
