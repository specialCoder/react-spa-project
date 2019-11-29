const path = require("path");
// const webpack = require('webpack');
const merge = require("webpack-merge");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// const CopyWebpackPlugin = require('copy-webpack-plugin');
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode:"development",
  plugins:[
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "title", // 指定html文件的title标签内容 ????
      template:path.resolve(__dirname,"static/html/index.dev.html"), // 指定要使用的模版
    }),
  ],
  devtool: "inline-source-map",
  devServer:{
    contentBase: "./dist",
    compress:true,
    proxy:{
    },
    port:8888,
    historyApiFallback: true,
  }
});