const path = require('path');// node的path模块
const CleanWebpackPlugin = require('clean-webpack-plugin');// 清除指定的文件夹
const HtmlWebpackPlugin = require('html-webpack-plugin');// 为html文件绑定bundle.js

module.exports = {
  entry: {
    app: './src/index.js' // 入口文件index.js
  },
  module:{
    rules:[{
        test:/\.css$/,
        use:[
          'style-loader',
          'css-loader'
        ],
    },
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
    new HtmlWebpackPlugin({
      title: 'Production'
    }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  }
};