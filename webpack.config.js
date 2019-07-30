var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://0.0.0.0:3003',
    'webpack/hot/only-dev-server',
    'babel-polyfill',
    'whatwg-fetch',
    './src/index'
  ],
  devServer: {
    hot: true,
    contentBase: path.resolve(__dirname, 'dist'),
    port: 3003,
    host: '0.0.0.0',
    publicPath: '/',
    historyApiFallback: true,
    disableHostCheck: true,
    overlay: true
  },
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
    filename: 'app.[hash].js'
  },
  devtool: 'eval',
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      options: {
        presets: [
          ['es2015', {
            'modules': false
          }],
          'stage-0',
          'react'
        ],
        plugins: [
          'transform-async-to-generator',
          'transform-decorators-legacy'
        ]
      }
    }, {
      test: /\.scss|css$/,
      use: [
        'style-loader',
        'css-loader',
        'postcss-loader',
        'resolve-url-loader',
        'sass-loader?sourceMap'
      ]
    }, {
      test: /\.(png|jpe?g|gif|svg)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            // path where the images will be saved
            name: 'assets/img/[name].[ext]'
          }
        },
        {
          loader: 'image-webpack-loader',
          options: {
            mozjpeg: {
              quality: 65
            },
            pngquant: {
              quality: '65-90',
              speed: 4
            },
            svgo: {
              plugins: [
                {
                  removeViewBox: false
                },
                {
                  removeEmptyAttrs: false
                }
              ]
            },
            gifsicle: {
              optimizationLevel: 7,
              interlaced: false
            },
            optipng: {
              optimizationLevel: 7,
              interlaced: false
            }
          }
        }
      ]
    }, {
      test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      use: 'url-loader?limit=10000&mimetype=application/font-woff'
    }, {
      test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      use: 'file-loader'
    }]
  },
  plugins: [
    new webpack.IgnorePlugin(/\/iconv-loader$/),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      }
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      hash: false,
      template: './index.hbs',
      favicon: './src/images/favicon.png'
    }),
    new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /nb/)
  ],
  resolve: {
    extensions: ['.js', '.jpeg', '.jpg', '.png'],
    alias: {
      '@': path.resolve(__dirname, './src/')
    }
  }
}
