const webpack = require('webpack');
 const merge = require('webpack-merge');
 const common = require('./webpack.common.js');
 const CleanWebpackPlugin = require('clean-webpack-plugin');
 const HtmlWebpackPlugin = require('html-webpack-plugin');
 const hotMiddlewareScript = 'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true'

 module.exports = merge(common, {
    mode:'development',
    plugins:[
      new CleanWebpackPlugin(['dist']),
      new HtmlWebpackPlugin({
        title: 'title', // 指定html文件的title标签内容
        template:'./src/index.html', // 指定要使用的模版
      }),
      new webpack.NamedModulesPlugin(),// 当开启 HMR 的时候使用该插件会显示模块的相对路径，建议用于开发环境
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoEmitOnErrorsPlugin()
    // new MiniCssExtractPlugin({
    //     filename: devMode ? '[name].css' : '[name].[hash].css',
    //     chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
    // })
    
    //   new webpack.DllReferencePlugin({
    //     context: __dirname,
    //     manifest: require('./manifest/manifest.json'),
    // }),
   ],
 });