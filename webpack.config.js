const path = require("path");
const webpack = require("webpack");

module.exports = {
  context: __dirname,
  entry: "./frontend/index.jsx",
  output: {
    path: path.resolve(__dirname, "app", "assets", "javascripts"),
    filename: "bundle.js"
  },
  resolve: {
    extensions: [".js", ".jsx", "*"]
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          query: {
            presets: ["env", "react"]
          }
        }
      }
    ]
  },
  devtool: "source-map",
  plugins: [
    new webpack.DefinePlugin({
      CLOUD_URL: JSON.stringify(process.env.CLOUD_URL),
      UPLOAD_PRESET: JSON.stringify(process.env.UPLOAD_PRESET)
    })
  ]
};
