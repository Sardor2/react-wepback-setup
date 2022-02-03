const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const modeConfig = (env) => require(`./build-tools/webpack.${env}`)(env);
const { merge } = require("webpack-merge");
const presetConfig = require("./build-tools/loadPresets");

module.exports = ({ mode, presets } = { mode: "production", presets: [] }) => {
  console.log(`mode is: ${mode}`);
  return merge(
    {
      mode,
      entry: path.join(__dirname, "src", "index.tsx"),
      resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx"],
      },
      output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundled.js",
      },
      plugins: [
        new HtmlWebpackPlugin({
          template: path.join(__dirname, "src", "index.html"),
        }),
        new webpack.HotModuleReplacementPlugin(),
      ],

      module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader",
              options: {
                presets: ["@babel/preset-env", "@babel/preset-react"],
              },
            },
          },
          {
            test: /\.(ts|tsx)$/,
            exclude: /node_modules/,
            use: ["ts-loader"],
          },
          {
            test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
            exclude: /node_modules/,
            use: ["url-loader", "file-loader"],
          },
        ],
      },
    },
    modeConfig(mode),
    presetConfig({ mode, presets })
  );
};
