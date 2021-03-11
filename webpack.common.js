const path = require('path');

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
    loader: 'postcss-loader',
  }
];

module.exports = {
  entry: {
    app:path.resolve(__dirname,'src','app.js'),
  },
  module:{
    rules:[
      {
        test: /\.jsx?$/,
        include:path.resolve(__dirname,'./src'),
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
              modifyVars: {
                'primary-color': '#1DA57A',
                'link-color': '#1DA57A',
                'border-radius-base': '2px',
              },
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
      'src': path.resolve(__dirname,'src'),
      'components': path.resolve(__dirname,'src/components/'),
      'utils': path.resolve(__dirname,'src/utils/'),
      'pages' :path.resolve(__dirname,'src/pages/'),
      'apis': path.resolve(__dirname,'src/apis/'),
      'config': path.resolve(__dirname,'src/config/'),
    },
    mainFiles:['index'],
    extensions: ['.jsx', '.js','.json']
  },
  externals:['.js','.jsx'],
  output: {
    filename: '[name].[hash].js',
    chunkFilename: '[name].[chunkhash:8].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath:'/'
  },
};