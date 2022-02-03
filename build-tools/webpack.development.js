module.exports = (env) => {
  return {
    plugins: [],
    devtool: "cheap-module-source-map",
    devServer: {
      hot: true,
      port: 3000,
      open: true,
      client: {
        overlay: true,
        progress: true,
        logging: "info",
      },
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
