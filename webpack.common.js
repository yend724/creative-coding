const path = require("path");
const glob = require("glob");
const TerserPlugin = require("terser-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

const rootDir = path.resolve(__dirname);
const entries = {};
const entryFiles = glob.sync(`${rootDir}/src/**/js/**.ts`);

const sliceStr = (original, match) => {
  return original.replace(match, "");
};
entryFiles.forEach((p) => {
  const rootPath = sliceStr(p, rootDir + "/src");
  const removedExtentionPath = sliceStr(rootPath, ".ts");
  entries[removedExtentionPath] = p;
});

const htmlFiles = glob.sync(`${rootDir}/src/**/**.html`);

module.exports = {
  mode: "production",
  devtool: "inline-source-map",
  entry: entries,
  output: {
    path: `${rootDir}/dist`,
    filename: "[name].js",
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
    new ForkTsCheckerWebpackPlugin(),
    ...htmlFiles.map((path, i) => {
      return new HtmlWebpackPlugin({
        inject: false,
        filename: `.${sliceStr(path, rootDir + "/src")}`,
        template: path,
      });
    }),
  ],
};
