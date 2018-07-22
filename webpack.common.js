const path = require('path');
const webpack = require('webpack');
const hotMiddlewareScript = 'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true'
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const babelrc = require('./.babelrc');

module.exports = {
  entry: {
    app:'./src/index.js',
    common:'./src/common.js',
  },
  module:{
    rules:[
      {
        test: /\.js$/,
        include:path.resolve(__dirname,'src'), // 只引入需要的
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,// 开启目录缓存
        },
        }
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use:[
          // process.env.NODE_ENV !== 'production' ? 'style-loader' : MiniCssExtractPlugin.loader,
          "style-loader",
          {
            loader:'css-loader',
            options:{
              modules:true,
              localIdentName:'[local]-[hash:base64:5]'
            }
          },
          'postcss-loader'
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
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};