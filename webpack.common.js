const path = require('path');// node的path模块
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');// 清除指定的文件夹
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const hotMiddlewareScript = 'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true'

module.exports = {
  // entry: {
  //   app: ['./src/index.js',hotMiddlewareScript], // 入口文件index.js
  //   vendor:['./src/common.js',hotMiddlewareScript]
  // },
  // entry: {
  //   app: ['./src/index.js'], // 入口文件index.js
  //   another:['./src/another-module.js']
  // },
  module:{
    rules:[
      {
        test:/\.css$/,
        use:[
          'style-loader',
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
    // new MiniCssExtractPlugin({
    //   // Options similar to the same options in webpackOptions.output
    //   // both options are optional
    //   filename: "[name].css",
    //   chunkFilename: "[id].css"
    // })
  ],
  output: {
    filename: '[name].bundle.js',
    // chunkFilename: '[id].chunk.js',
    path: path.resolve(__dirname, 'dist'),
  },
//   splitChunks: {
//     chunks: "async",
//     minSize: 30000,
//     minChunks: 1,
//     maxAsyncRequests: 5,
//     maxInitialRequests: 3,
//     automaticNameDelimiter: '~',
//     name: true,
//     cacheGroups: {
//         vendors: {
//             test: /[\\/]node_modules[\\/]/,
//             priority: -10
//         },
//     default: {
//             minChunks: 2,
//             priority: -20,
//             reuseExistingChunk: true
//         }
//     }
// }
};