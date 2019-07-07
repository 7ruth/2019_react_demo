// /* config-overrides.js */

const {
    override,
    addDecoratorsLegacy,
    disableEsLint,
    addBundleVisualizer,
    addWebpackAlias,
    adjustWorkbox,
    addBabelPlugins,
    fixBabelImports,
    babelInclude,
    removeModuleScopePlugin
  } = require("customize-cra");

const path = require("path");

module.exports = override(
    disableEsLint(),
    removeModuleScopePlugin(),
    ...addBabelPlugins(
      "polished",
      "emotion",
      "babel-plugin-transform-do-expressions"
    ),
    fixBabelImports("lodash", {
      libraryDirectory: "",
      camel2DashComponentName: false
    }),
    fixBabelImports("react-feather", {
      libraryName: "react-feather",
      libraryDirectory: "dist/icons"
    }),
    babelInclude([
        path.resolve("src"), // make sure you link your own source
      ])
  );