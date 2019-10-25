const path = require('path');
const autoprefix=require('autoprefix');

const commmonCssLoader = [
  {
    loader:'style-loader'
  },
  {
    loader:'css-loader',
    options:{
      // module:true,
      import:true,
    }
  },
  {
    loader:'postcss-loader',
    options:{
      plugins:[autoprefix]
    }
  }
];
module.exports = {
  entry: {
    app:path.join(__dirname,'src/index.js'),
  },
  module:{
    rules:[
      {
        test: /\.js$/,
        include:path.resolve(__dirname,'src'),// node_modules 里面的不用转译
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,// 开启目录缓存
          },
        }
      },
      {
        test:/\.less$/,
        use:[
          ...commmonCssLoader,
          {
            loader:'less-loader',
            options:{
              javascriptEnabled:true
            }
          }
        ]
      },
      {
        test:/\.css$/,
        use:commmonCssLoader,
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
    },
    { 
      test: /\.txt$/, 
      use: 'raw-loader' 
    }],
  },
  plugins:[
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'title', // 指定html文件的title标签内容
      template:path.join(__dirname,'src/index.html'), // 指定要使用的模版
    }),
  ],
  resolve:{
    alias:{
      "src":path.resolve(__dirname,'src'),
      "components":path.resolve(__dirname,'src/components'),
      "utils":path.resolve(__dirname,'src/utils'),

    }
  },
  externals:{

  },
  output: {
    filename: '[name].[hash].js',
    // chunkname 未被列在entry中，却又需要被打包出来的文件命名配置
    chunkFilename: '[name].[chunkhash:8].js',
    path: path.resolve(__dirname, 'dist'),
  },
};