const { merge } = require("webpack-merge")
const baseConfig = require("./webpack.base")
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const join = p => path.join(__dirname, p)

module.exports = merge(baseConfig, {
  entry: join('../example/src/index.tsx'),
  output: {
    path: join('../example/dist'),
    filename: 'bundle.js',
    library: 'laputarenderer',
    libraryTarget: 'umd',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: join('../example/src/index.html'),
      filename: 'index.html',
    }),
  ],
  devServer: {
    port: 9090,
  },
})