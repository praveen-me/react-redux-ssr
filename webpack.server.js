const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');

const config = {
  target: "node",
  entry: "./server/index.js",
  output: {
    filename: "server.bundle.js",
    path: path.resolve(__dirname, "dist")
  },
}

module.exports = merge(baseConfig, config);