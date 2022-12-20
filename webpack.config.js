const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "src/index.js",
  output: {
    path: path.join(__dirname, "dist"),
    filename: "index_bundle.js",
  },
};
