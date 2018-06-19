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
     optimization: {
        splitChunks: {
            chunks: 'initial', // 只对入口文件处理
            cacheGroups: {
                vendor: { // split `node_modules`目录下被打包的代码到 `page/vendor.js && .css` 没找到可打包文件的话，则没有。css需要依赖 `ExtractTextPlugin`
                    test: /node_modules\//,
                    priority: 10,
                    enforce: true
                },
                commons: { // split `common`和`components`目录下被打包的代码到`page/commons.js && .css`
                    // test: /common\/|components\//,
                    test:'./src',
                    name: 'common',
                    minSize:30000,
                    minChunks:2,
                    priority: 10,
                    enforce: true
                }
            }
        },
    },
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