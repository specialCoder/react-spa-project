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
