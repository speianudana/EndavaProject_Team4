const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack')

// import moduleName from '../src/main/resources/static'

module.exports = (env, options) => {
    const isDev = options.mode === 'development'
    console.log('mode: ' + options.mode)
    console.log()

    return {
        entry: isDev ? [
            'react-dev-utils/webpackHotDevClient',
            './src/main/index.js'
        ] : ['./src/main/index.js'],
        output: {
            //'./build'
            path: path.join(__dirname, '../src/main/resources/static'),
            filename: isDev ? '[name].dev.js' : '[name].[contenthash].js',
            chunkFilename: '[name]_[chunkhash].js',
            publicPath: '/'
        },
        devtool: isDev ? 'inline-source-map' : '',
        devServer: isDev ? {
            contentBase: "/build/client",
            overlay: true,
            // host: '192.168.1.5',
        } : {},
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
                            loader: isDev ? 'style-loader' : MiniCssExtractPlugin.loader
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
                        },
                    ]
                },
                {
                    test: /\.(png|jpe?g|gif|ico)$/i,
                    exclude: /node_modules/,
                    loader: 'file-loader',
                    options: {
                        outputPath: 'images',
                        name(file) {
                            if (isDev) {
                                return '[path][name].[ext]';
                            }

                            return '[contenthash].[ext]';
                        },
                    },
                },
            ]
        },
        devServer: {
            historyApiFallback: true,
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: './src/main/index.html',
                filename: 'index.html',
                // favicon: './favicon.ico'
            }),

            ...(isDev ? [] : [
                new OptimizeCssAssetsPlugin({}),
                new MiniCssExtractPlugin({
                    filename: isDev ? '[name].css' : '[name].[contenthash].css',
                    chunkFilename: isDev ? '[id].css' : '[id].[contenthash].css',
                }),
                new CleanWebpackPlugin(),
                new webpack.HashedModuleIdsPlugin(),
            ]),
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