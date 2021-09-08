const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

module.exports = {
  mode: "production",
  devtool: "inline-source-map",
  entry: {
    "color-circle": "./src/color-circle/assets/js/index.ts",
    "img-resolution": "./src/img-resolution/assets/js/index.ts",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name]/assets/js/index.js",
  },
  module: {
    rules: [
      {
        test: /\.(js|ts)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/typescript"],
            plugins: [
              "@babel/proposal-class-properties",
              "@babel/proposal-object-rest-spread",
              "@babel/plugin-transform-runtime",
            ],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        extractComments: false,
      }),
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/color-circle/html/index.html",
      chunks: ["color-circle"],
      filename: "color-circle/index.html",
    }),
    new HtmlWebpackPlugin({
      template: "src/img-resolution/html/index.html",
      chunks: ["img-resolution"],
      filename: "img-resolution/index.html",
    }),
    new ForkTsCheckerWebpackPlugin(),
  ],
};
