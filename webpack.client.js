const path = require('path')
const merge = require('webpack-merge').default
const baseConfig = require('./webpack.base')

const config =  {
  entry: './src/client/client.js',

  output: {
    filename: 'client-bundle.js',
    path: path.resolve(__dirname, 'public')
  },
}

module.exports = merge(baseConfig, config)
