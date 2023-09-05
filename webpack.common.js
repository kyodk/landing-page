const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/js/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'js/main.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        ]
      },

      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: 'css-loader',
            options: {
              // CSS内のurl()メソッドを取り込まない
              url: false,
              sourceMap: true,
              // Sass+PostCSS
              importLoaders: 2
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              postcssOptions: {
                plugins: [['autoprefixer', { grid: true }]]
              }
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style.css'
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/html/index.html'
    }),
    new HtmlWebpackPlugin({
      filename: '404.html',
      template: 'src/html/404.html'
    }),
    new HtmlWebpackPlugin({
      filename: 'privacy/index.html',
      template: 'src/html/privacy/index.html'
    })
  ]
};
