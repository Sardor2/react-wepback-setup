module.exports = (env) => {
  return {
    devtool: "source-map",
    devServer: {
      open: true,
      hot: true,
      port: 3000,
    },
    module: {
      rules: [
        {
          test: /\.s[ac]ss$/i,
          use: ["style-loader", "css-loader", "sass-loader"],
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"],
        },
      ],
    },
  };
};
