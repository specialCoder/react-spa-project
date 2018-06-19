 const webpack = require('webpack');
 const path = require('path');
 const merge = require('webpack-merge');
//  const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
 const common = require('./webpack.common.js');


 module.exports = merge(common, {
     output:{
        // publicPath:path.resolve(__dirname, 'dist'),
     },
     mode:'production',
 });