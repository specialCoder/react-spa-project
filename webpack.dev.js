 const webpack = require('webpack');
 const merge = require('webpack-merge');
 const common = require('./webpack.common.js');
 const hotMiddlewareScript = 'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true'

 module.exports = merge(common, {
  entry: {
    app: [hotMiddlewareScript], // 入口文件index.js
    vendor:[hotMiddlewareScript]
  },
    mode:'development',
    plugins:[
      new webpack.NamedModulesPlugin(),// 当开启 HMR 的时候使用该插件会显示模块的相对路径，建议用于开发环境
      new webpack.HotModuleReplacementPlugin(),
   ]
 });