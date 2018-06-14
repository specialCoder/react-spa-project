const http = require('http');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

// 使用express启用一个服务器
const express = require('express');

// 引用开发环境下的webpack配置文件
const config = require('./webpack.dev');
const app = express();
const webpackConfig = webpack(config);
const devMiddlewareCompiler = webpackDevMiddleware(webpackConfig,{
    publicPath:config.output.publicPath
});
const hotMiddlewareCompiler = webpackHotMiddleware(webpackConfig,{
    log: false,
    heartbeat: 2000,
 })

app.use(devMiddlewareCompiler);// 使用热编译中间件
app.use(hotMiddlewareCompiler);// 使用热替换中间件

app.listen(8080,function(){
    console.log('Example app listening on port 8080!\n');
});