const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const AntdDayjsWebpackPlugin = require('antd-dayjs-webpack-plugin');

const envPathPartMap = {
  'production': 'online',
  'test': 'test'
}

const envPart = envPathPartMap[process.env.NODE_ENV];
// const dotenvFile = path.resolve(process.cwd(), `src/env/.env.${process.env.NODE_ENV}`);
const dotenvFile = `src/env/.env.${process.env.NODE_ENV}`;
require('dotenv').config({
  path: dotenvFile
})

// 固定使用的process.env下的key
const ENV_KEYS = ['NODE_ENV']

// 过滤process.env下的值
const envKeys = Object.keys(process.env).filter((key) => {
  // ENV_KEYS里面包含的key,或者‘__${key}__’这种形式
  return ENV_KEYS.includes(key) || /^__(\w)+__$/i.test(key);
});
const processEnv = envKeys.reduce((pre,key) => {
  pre[key] = process.env[key];
  return pre;
}, {});

const commmonCssLoader = [
  {
    loader:process.env.NODE_ENV === 'development' ? 'style-loader' : MiniCssExtractPlugin.loader
  },
  {
    loader:'css-loader',
    options:{
      // module:true,
      import:true,
    }
  },
  {
    loader: 'postcss-loader',
  }
];

module.exports = {
  target:'web',
  entry: {
    app:path.resolve(__dirname,'src','index.js'),
  },
  module:{
    rules:[
      {
        test: /\.wasm$/,
        type: 'webassembly/async',
      },
      {
        test: /\.worker\.js$/,
        use: { loader: 'worker-loader' },
      },
      {
        test: /\.(js|ts)x?$/,
        include:path.resolve(__dirname,'./src'),
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
            plugins:[
              ["import",{
                "libraryName": "antd",
                "style": true
            }]
            ]
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
              lessOptions: {
                modifyVars: {
                  // 支持定制的变量：https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less
                  '@font-size-base': '12px',
                  'primary-color': '#1DA57A',
                  'link-color': '#1DA57A',
                  'border-radius-base': '2px',
                },
                javascriptEnabled:true,
              }
            }
          }
        ]
      },
      {
        test:/\.css$/,
        use:commmonCssLoader,
      },
      {
        test: /\.(png|jpg|gif)$/,
        type: 'asset/resource',
        generator: {
          // [ext]前面自带"."
          filename: 'image/[hash:5].[name][ext]',
        },
      },
      {
        test: /\.svg$/,
        type: 'asset/resource',
        generator: {
          // [ext]前面自带"."
          filename: 'image/[hash:5].[name][ext]',
        },
        use:{
          loader: 'svgo-loader',
          options: {
            multipass: true,
            js2svg: {
              indent: 2,
              pretty: true,
            }
          }
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        type: 'asset/resource',
        generator: {
          filename: 'font/[hash:5].[name][ext]',
        },
      },
      { 
        test: /\.txt$/, 
        type: 'asset/source',
        generator: {
          filename: 'txt/[hash:].[name][ext]',
        },
      }],
  },
  resolve:{
    alias:{
      'src': path.resolve(__dirname,'src'),
    },
    mainFiles:['index'],
    extensions: ['.tsx', '.ts', '.jsx', '.js',  '.json']
  },
  plugins:[
    new AntdDayjsWebpackPlugin(),
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(processEnv),
    }),
  ],
  output: {
    filename: 'js/[name].[chunkhash:5].js',
    chunkFilename: '[name].[chunkhash:8].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath:envPart ? `https://static-nginx-${envPart}.fbcontent.cn/conan/conan-zic-page/`: '/',
  },
};