/**
 * 解决重复打包导致打包慢的问题
 * 1. 设置external，但是被别的包依赖时还会重复打包
 * 2. 单独打包重复的包，设置别名挂在到window对象，再使用external
 * 3.DllPlugin reference URL: https://blog.csdn.net/suhuaiqiang_janlay/article/details/79715969
 */
const webpack = require('webpack');
const merge = require('webpack-merge');
const path =require('path');
const common = require('./webpack.common.js');

module.exports = merge(common, {
entry:{
    common:['./src/common.js'],
},
mode:'production',
plugins:[
    new webpack.DllPlugin({
        path: './manifest/manifest.json', // important!
        name: '[name]',
        context: __dirname,
      }),
    ],
output:{
    path: path.resolve(__dirname, 'dist'),
}
});
