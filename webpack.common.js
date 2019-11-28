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
    app:path.join(__dirname,'src/app.js'),
  },
  module:{
    rules:[
      {
        test: /\.js$/,
        include:path.resolve(__dirname,'src'),
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
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