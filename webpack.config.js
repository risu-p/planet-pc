var path = require("path");
const { merge } = require("webpack-merge");
const devConf = require("./webpackConfig/dev");
const prodConf = require("./webpackConfig/prod");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = (env) => {
  return merge(
    {
      entry: "./src/entry.tsx",
      output: {
        path: path.resolve(__dirname, "build"),
        filename: "main.js",
      },
      resolve: {
        extensions: [".ts", ".tsx", ".js"],
      },
      module: {
        rules: [
          {
            test: /\.(ts|tsx)$/,
            use: {
              loader: "ts-loader",
              options: {
                allowTsInNodeModules: true,
              },
            },
          },
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            loader: "babel-loader",
            options: { presets: ["@babel/env", "@babel/preset-react"] },
          },
          {
            test: /\.(less|css)$/,
            use: ["style-loader", "css-loader", "less-loader"],
          },
        ],
      },
      plugins: [
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin({
          patterns: [
            {
              from: path.resolve(__dirname, "public/sharedWorker"),
              to: path.resolve(__dirname, "build/sharedWorker"),
            },
          ],
        }),
      ],
    },
    env.development ? devConf() : prodConf()
  );
};
