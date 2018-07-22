# webpack-init-project

## Introduction

一个以webpack4为基础的现代工程模版,打造简单易用的webpack环境项目

主要有以下特点：

1. 支持ES6 jsx 语法
2. 支持vue 语法
3. 可以根据场景需要裁剪或者扩展

-----

主要包括：

1. base部分
> 配置内容详细见webpack.common.js。更多关于：生成css单独文件、CSS Module、css sourceMap等内容可以翻看具体的loader链接

 + 入口文件：
  - App:index.js  
  - Common:common.js
 + js文件
    - [bable-loader](https://github.com/babel/babel-loader)
    - [.babelrc](https://www.babeljs.cn/docs/usage/babelrc/)
 + css文件：默认采用打包输出，没有生成单独的文件；支持less和scss;开启Css Module(规则：[local]-[hash:base64:5])
    - [style-loader](https://github.com/webpack-contrib/style-loader):js -> tag style
    - [css-loader](https://github.com/webpack-contrib/css-loader): css -> css in js
    - [less-loader](https://github.com/webpack-contrib/less-loader): less -> css
    - [sass-loader](https://github.com/webpack-contrib/sass-loader): sass -> css
    - [postcss-loader](https://github.com/postcss/postcss): Autoprefixer
    - [MiniCssExtractPlugin](https://github.com/webpack-contrib/mini-css-extract-plugin):js -> file style
 + 图片/字体：
  - 默认开启[file-loader](https://github.com/webpack-contrib/file-loader):file module -> url
 - xml tsv等： 默认未开启处理

2. 开发环境配置部分
> 配置内容详细见webpack.dev.js

- mode:'development'：webpack4.X 指明环境
- [webpack-hot-middleware](https://github.com/webpack-contrib/webpack-hot-middleware)
- [CleanWebpackPlugin]()
- [HtmlWebpackPlugin]()
- [NamedModulesPlugin]()
- [HotModuleReplacementPlugin]()

3. 生产环境配置部分
> 配置内容详细见webpack.prod.js

- mode:'production'
+ optimization
    - [splitChunks](https://webpack.js.org/plugins/split-chunks-plugin/)

4. server 部分

- 使用[express][1]创建http服务
- 使用[webpack-dev-middleware][2]，文件变更时实时编译
- 所有路由重定向到入口文件，使用前端路由导航

## Install

    npm install

## build

    npm run build

## start

    npm start

## TODOLIST

开发一个脚手架，让用户自己选择框架安装，是webpack环境配置更加具有针对性

1. react
    - [create-react-app](https://github.com/webpack-contrib/webpack-hot-middleware)
2. vue
    - [vue-cli](https://github.com/vuejs/vue-cli)
3. none: 默认不引入框架的配置环境

[1]:https://expressjs.com/
[2]:https://github.com/webpack/webpack-dev-middleware
