const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    app: "./src/js/main.js"
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist/js")
  },
  watch: true,

  module: {
    rules: [
      {
        test: /\.js$/, // include .js files
        enforce: "pre", // preload the jshint loader
        exclude: /node_modules/ // exclude any and all files in the node_modules folder
      }
    ]
  }
};
