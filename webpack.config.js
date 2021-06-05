const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const EslintWebpackPlugin = require("eslint-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    app: ["./src/index.jsx"],
  },
  output: {
    publicPath: "/",
    path: path.resolve(__dirname, "build/"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.(js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    new MiniCssExtractPlugin(),
    new EslintWebpackPlugin({
      extensions: ["js", "jsx"],
    }),
  ],
  devServer: {
    port: 4040,
    contentBase: path.join(__dirname, "build"),
    historyApiFallback: true,
    open: true,
    hot: true,
  },
};
