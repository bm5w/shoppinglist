var webpack = require('webpack');
module.exports = {
  entry: ["webpack-dev-server/client?http://localhost:8082", "./app/app.js"],
  output: {
    publicPath: "/dist/app/",
    path: __dirname + "/dist/app",
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: "/node_modules",
        query: {
          presets: ["es2015", "react"]
        }
      },
      {
        test: /\.scss$/,
        loaders: ["style", "css", "sass"],
        exclude: "/node_modules"
      }
    ]
  },
  // devTool: "source-map"
}
