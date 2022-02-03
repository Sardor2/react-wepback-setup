const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");

module.exports = (env) => {
  return {
    devtool: "nosources-source-map",
    plugins: [
      new MiniCssExtractPlugin({
        filename: "[name].css",
        chunkFilename: "[id].css",
      }),
      new CompressionPlugin(),
    ],
    optimization: {
      minimizer: [
        new UglifyJsPlugin({
          cache: true,
          parallel: true,
          sourceMap: true, // set to true if you want JS source maps for css
        }),
        new OptimizeCSSAssetsPlugin({}),
      ],
    },
    output: {
      filename: "bundle.js",
      assetModuleFilename: "assets/[hash][ext][query]",
    },
    module: {
      rules: [
        {
          test: /\.s[ac]ss$/i,
          use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
        },
        {
          test: /\.css$/,
          use: [MiniCssExtractPlugin.loader, "css-loader"],
        },
        {
          test: /\.html/,
          type: "asset/resource",
          generator: {
            filename: "static/[hash][ext][query]",
          },
        },
      ],
    },
  };
};
