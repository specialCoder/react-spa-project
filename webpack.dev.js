const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

 module.exports = merge(common, {
    mode:'development',
    plugins:[
      new webpack.NoEmitOnErrorsPlugin()
   ],
   devtool: 'cheap-module-eval-source-map',
   devServer:{
     proxy:{
     },
     port:8888,
    historyApiFallback: true,
   }
 });