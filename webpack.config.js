const FileLoader = require('file-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpack       = require('html-webpack-plugin')
const MiniCssExtratc    = require('mini-css-extract-plugin')
const CopyPlugin        = require("copy-webpack-plugin");

module.exports = {
    mode: "development", // "production" | "development" | "none"

    output:{
        clean: true
    },

    devServer: {
        liveReload: true,
    },

    module: {
        rules: [
            {
                test: /\.html$/,
                loader: 'html-loader',
                options: {
                    sources: false
                }
            },
            {
                test: /\.css$/,
                exclude: /styles.css$/,
                use: ['style-loader','css-loader']
            },
            {
                test: /styles.css$/,
                use : [ MiniCssExtratc.loader, 'css-loader' ]
            },
            {
                test: /\.(png|jpe?g|gif)$/,
                loader: 'file-loader'
            }
        ]
    },

    optimization: {},

    plugins: [
        new HtmlWebpack({
            title: 'Mi Webpack app',
            // filename: 'index.html',
            template: './src/index.html'
        }),
        new MiniCssExtratc({
            filename: '[name].css',
            ignoreOrder: false
        }),
        new CopyPlugin({
            patterns: [
                {from: 'src/assets/', to: 'assets/'}
            ]
        })
    ],
}