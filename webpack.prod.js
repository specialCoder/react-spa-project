//  const webpack = require('webpack');
//  const path = require('path');
 const merge = require('webpack-merge');
 const common = require('./webpack.common.js');
 const HtmlWebpackPlugin = require('html-webpack-plugin');// 为html文件绑定bundle.js
//  const MiniCssExtractPlugin = require("mini-css-extract-plugin");

 module.exports = merge(common, {
    entry:{
        app: './src/index.js', // 入口文件index.js
        another:'./src/another-module.js'
    },
     mode:'production',
     plugins:[
        new HtmlWebpackPlugin({
            title: 'Production', // 指定html文件的title标签内容
            template:'./src/index.html', // 指定要使用的模版
          }),
        // new MiniCssExtractPlugin({
        //     filename: devMode ? '[name].css' : '[name].[hash].css',
        //     chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
        // })
     ]
 });