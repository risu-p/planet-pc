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
        filename: "[name].bundle.js",
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
          {
            test: /\.(jpg|png|gif)$/,
            use: [
              {
                loader: "file-loader",
                options: {
                  name: "[name].[ext]",
                  outputPath: "assets/images",
                },
              },
            ],
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
            {
              from: path.resolve(__dirname, "public/serviceWorker"),
              /* 
                如果将 serviceWorker.js脚本 放在 /serviceWorker 文件夹下
                那么 service worker 支持的scope，也必须是 /serviceWorker 之下的
                所以，要放在最外层，这样支持的最大scope就是根了 /
                综述：service worker 的 max scope 是它所在的目录位置 
               */
              to: path.resolve(__dirname, "build"),
            },
          ],
        }),
      ],
      // optimization: {
      //   splitChunks: {
      //     chunks: "all",
      // cacheGroups: {
      //   vendors: {
      //     test: /[\\/]node_modules[\\/]/,
      //     name: "vendors",
      //   },
      // },
      //   },
      // },
    },
    env.development ? devConf() : prodConf()
  );
};
