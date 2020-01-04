const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
// const { CleanWebpackPlugin } = require('clean-webpack-plugin')
// const webpack = require('webpack')
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = (env, options) => {


  return {
    mode: 'development',
    entry: [
      './src/main/index.js'
    ],
    output: {
      path: path.join(__dirname, '../src/main/resources/static'),
      filename: '[name].dev.js',
      chunkFilename: '[name]_[chunkhash].js',
      publicPath: '/'
    },
    devtool: 'inline-source-map',
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader'
          }
        },
        {
          test: /\.(scss|sass|css)$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'style-loader'
            },
            {
              loader: 'css-loader',
              options: {
                modules: {
                  mode: 'local',
                  localIdentName: '[path]_[name]_[local]'
                }
              }
            },
            {
              loader: 'sass-loader'
            }
          ]
        },

        {
          test: /\.(png|jpe?g|gif|ico)$/i,
          exclude: /node_modules/,
          loader: 'file-loader',
          options: {
            outputPath: 'images',
            name(file) {
              return '[path]-[name].[ext]'
            }
          }
        }

      ]
    },
    devServer: {
      historyApiFallback: true
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/main/index.html',
        filename: 'index.html',
        favicon: './src/main/favicon.ico'
      }),
    ],
    optimization: {
      runtimeChunk: 'single',
      splitChunks: {
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all'
          }
        }
      }

    }

  }
}
