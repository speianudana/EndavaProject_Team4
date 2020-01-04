const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const webpack = require('webpack')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const TerserPlugin = require('terser-webpack-plugin')


module.exports = (env, options) => {

  let showDiagram = false
  showDiagram = options.show && Number(options.show) === 1

  return {
    mode: 'production',
    entry: ['./src/main/index.js'],
    output: {
      path: path.join(__dirname, '../src/main/resources/static'),
      filename: '[name].[contenthash].js',
      chunkFilename: '[name]_[chunkhash].js',
      publicPath: '/'
    },
    devtool: '',
    optimization: {
      minimize: true,

    },
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
              loader: MiniCssExtractPlugin.loader
            },
            {
              loader: 'css-loader',
              options: {
                modules: {
                  mode: 'local',
                  localIdentName: '[hash:base64]'
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

              return '[contenthash].[ext]'
            }
          }
        }
      ]
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: '[name].[contenthash].css',
        chunkFilename: '[id].[contenthash].css'
      }),
      new CleanWebpackPlugin(),
      new webpack.HashedModuleIdsPlugin(),

      new OptimizeCssAssetsPlugin(),
      new TerserPlugin(),
      new HtmlWebpackPlugin({
        template: './src/main/index.html',
        filename: 'index.html',
        favicon: './src/main/favicon.ico',
        minify: {
          removeAttributeQuotes: true,
          collapseWhitespace: true,
          removeComments: true
        }
      }),

      ...(showDiagram ? [new BundleAnalyzerPlugin()] : []),
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
