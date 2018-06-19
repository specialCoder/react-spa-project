 const webpack = require('webpack');
 const path = require('path');
 const merge = require('webpack-merge');
//  const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');// 为html文件绑定bundle.js
 const common = require('./webpack.common.js');


 module.exports = merge(common, {
    entry:{
        app: ['./src/index.js'], // 入口文件index.js
        another:['./src/another-module.js']
    },
     output:{
        // publicPath:path.resolve(__dirname, 'dist'),
     },
     mode:'production',
     plugins:[
        new HtmlWebpackPlugin({
            title: 'Production', // 指定html文件的title标签内容
            template:'./src/index.html', // 指定要使用的模版
            // chunk:['vendor']
          }),
     ]
 });