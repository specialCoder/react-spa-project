const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const devMode = process.env.NODE_ENV !== 'production'
module.exports = {
  entry: {
    App:'./src/index.js',
    common:'./src/common.js',
  },
  output: {
    filename: '[name].bundle.[hash].js',
    path: path.resolve(__dirname, 'dist'),
    // publicPath: '/'
  },
  mode:'development',
  devtool: 'inline-source-map',
  module:{
      rules:[
        {
          test: /\.(sa|sc|c)ss$/,
          use: [
            devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
            'css-loader',
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
        }
    ],
  },
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
    // runtimeChunk: {
    //     name: 'page/manifest'
    // }
},
  plugins:[
      new HtmlWebpackPlugin({
        title:'output _ Management', // html <title></title>
        filename:'index.html', // [output]/[filename].html 引用文件的名字
        template:'./src/index.html',// 模版
      }),
      new CleanWebpackPlugin(['dist']),
      new webpack.HotModuleReplacementPlugin(),// 模块热替换
      new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // both options are optional
        filename: devMode ? '[name].css' : '[name].[hash].css',
        chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
      })
    ]
};