const http = require('http');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const express = require('express');

const config = require('./webpack.config');
const app = new express();
const webpackConfig = webpack(config);
const devMiddlewareCompiler = webpackDevMiddleware(webpackConfig,{
    publicPath:config.output.publicPath
});
const hotMiddlewareCompiler = webpackHotMiddleware(webpackConfig,{
    log: false,
    heartbeat: 2000,
 })

// app.use(devMiddlewareCompiler);
// app.use(hotMiddlewareCompiler);

app.listen(3000,function(){
    console.log('Example app listening on port 3000!\n');
});