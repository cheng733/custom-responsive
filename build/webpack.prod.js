const { merge } = require("webpack-merge")
const baseConfig = require("./webpack.base")
const path = require('path');
const resolve = p => path.resolve(__dirname, p)

module.exports = merge(baseConfig, {
  entry: resolve('../src/index.ts'),
  output: {
    filename: 'index.js',
    path: resolve('../dist'),
    library: 'laputarenderer',
    libraryTarget: 'umd'
  },
  devtool: 'source-map',
  externals: {
    'react': 'react',
    'react-dom': 'react-dom'
  }
})