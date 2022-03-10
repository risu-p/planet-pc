/**
 * dev环境特有的配置
 */
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = () => {
  return {
    mode: "development",
    devServer: {
      port: 8012,
      hot: true,
      disableHostCheck: true,
      // host: "0.0.0.0",
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "../public/index.html"),
      }),
    ],
  };
};
