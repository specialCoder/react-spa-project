const path = require("path");
const webpack = require("webpack");
const merge = require("webpack-merge");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// const CopyWebpackPlugin = require('copy-webpack-plugin');
const common = require("./webpack.common.js");
//  const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(common, {
  mode:"production",
  devtool:"none",
  // 生产环境使用CDN加速
  externals:{
    react: "React",
    "react-dom": "ReactDOM",
  },
  optimization: {
    splitChunks: {
      chunks: "initial", // 只对入口文件处理
      cacheGroups: {
        vendor: { // split `node_modules`目录下被打包的代码到 `page/vendor.js && .css` 没找到可打包文件的话，则没有。css需要依赖 `ExtractTextPlugin`
          test: /node_modules\//,
          name: "vendor",
          priority: 10,
          enforce: true
        },
      }
    },
  },
  plugins:[
    new webpack.ProgressPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "title", // 指定html文件的title标签内容 ????
      template:path.resolve(__dirname,"static/html/index.prod.html"), // 指定要使用的模版
    }),
    new webpack.NoEmitOnErrorsPlugin()
  ],
});