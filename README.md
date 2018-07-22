# webpack-init-project

## Introduction

一个以webpack4为基础的现代工程模版,打造简单易用的webpack环境项目

主要包括：

1. base部分
> 配置内容详细见webpack.common.js，更多关于：生成css单独文件、CSS Module、css sourceMap等内容可以翻看具体的loader链接

 - 入口文件： App:index.js  Common:common.js
 + css文件：默认采用打包输出，没有生成单独的文件；支持less和scss;开启Css Module(规则：[local]-[hash:base64:5])
    - [style-loader](https://github.com/webpack-contrib/style-loader):js -> tag style
    - [css-loader](https://github.com/webpack-contrib/css-loader): css -> css in js
    - [less-loader](https://github.com/webpack-contrib/less-loader): less -> css
    - [sass-loader](https://github.com/webpack-contrib/sass-loader): sass -> css
    - [postcss-loader](https://github.com/postcss/postcss): Autoprefixer
    - [MiniCssExtractPlugin](https://github.com/webpack-contrib/mini-css-extract-plugin):js -> file style
 - 图片/字体： 默认开启file-loader，会进行处理
 - xml tsv等： 默认未开启处理

2. 开发环境配置部分
> 详细见webpack.dev.js

- webpack4.X 指明环境 mode:'development'
+ 开启热替换：编译之后自动刷新页面
    - [hot-webpack-middleware]()

3. 生产环境配置部分


4. server 部分

- 使用express创建http服务
- 使用webpack-dev-middleware，文件变更时实时编译
- 所有路由重定向到入口文件，使用前端路由导航

## Install

    npm install

## build

    npm build

## start

改版之后首先要生成manifest.json文件：

    npm run dll

然后启动项目：

    npm start
