const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const path = require("path");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    port: 4040,
    contentBase: path.join(__dirname, "build"),
    historyApiFallback: true,
    open: true,
    hot: true,
  },
});
