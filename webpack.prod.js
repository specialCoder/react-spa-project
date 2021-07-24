const path = require("path");
const webpack = require("webpack");
const { merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// const CopyWebpackPlugin = require('copy-webpack-plugin');
const common = require("./webpack.common.js");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = merge(common, {
  mode:"production",
  // devtool:"none",
  // 生产环境使用CDN加速
  externals:{
    react: "React",
    "react-dom": "ReactDOM",
  },
  optimization: {
    minimize: true,
    minimizer: [
      // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
      // `...`,
      new CssMinimizerPlugin(),
    ],
    splitChunks: {
      // chunks: "initial", // 只对入口文件处理
      cacheGroups: {
        vendor: {
          chunks: 'all',
          name: 'vendor', // 打包后的文件名，任意命名
          test: /[\\/]node_modules[\\/]/, // 指定是 node_modules 下的第三方包
          maxInitialRequests: 5,
          minSize: 2,
          priority: 10, // 设置优先级，防止和自定义的公共代码提取时被覆盖，不进行打包
        },
      },
    },
  },
  output:{
    // build下publicPath 配置
    publicPath: process.env.__BASE_URL__,
  },
  plugins:[
    new webpack.ProgressPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "App Demo",
      template:path.resolve(__dirname,"./static/html/template.prod.html"), // 指定要使用的模版
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[chunkhash:5].css',
      chunkFilename: '[name].[chunkhash:8].css',
      linkType: 'text/css',
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    }),
    new webpack.NoEmitOnErrorsPlugin()
  ],
});