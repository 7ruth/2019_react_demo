const webpackConfig = require("../config-overrides.js");
const path = require("path");

// We only want to pull the resolve and module config from our root webpack.config.js
module.exports = {
  mode: "development",
  entry: webpackConfig.entry,
  resolve: webpackConfig.resolve,
  module: webpackConfig.module
};