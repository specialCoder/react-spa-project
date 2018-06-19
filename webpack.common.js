const path = require('path');// node的path模块
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');// 清除指定的文件夹
const hotMiddlewareScript = 'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true'
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const env = process.env.NODE_ENV;

module.exports = {
  // entry: {
  //   app: ['./src/index.js',hotMiddlewareScript], // 入口文件index.js
  //   vendor:['./src/common.js',hotMiddlewareScript]
  // },
  module:{
    rules:[
      {
        test:/\.css$/,
        use:[
          "style-loader",
          'css-loader'
        ],
    },
  //   {
  //     test:/\.css$/,
  //     use:[
  //       MiniCssExtractPlugin.loader,
  //       "css-loader"
  //     ]
  // },
    {
       test: /\.(png|svg|jpg|gif)$/,
       use: [
         'file-loader'
       ]
     },
      {
           test: /\.(woff|woff2|eot|ttf|otf)$/,
           use: [
             'file-loader'
           ]
      },
        // {
        //   test: /\.(csv|tsv)$/,
        //   use: [
        //     'csv-loader'
        //   ]
        // },
        // {
        //   test: /\.xml$/,
        //   use: [
        //     'xml-loader'
        //   ]
        // }
  ],
},
  plugins: [
    new CleanWebpackPlugin(['dist']),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};