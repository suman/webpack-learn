const path = require('path');
const miniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin }= require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle[contenthash].js',
        path: path.resolve(__dirname, './dist'),
        publicPath: ''
    },

    module: {
        rules:[
            {
                test: /\.(jpg|png)$/,
                type: 'asset',
                parser: {
                    dataUrlCondition: {maxSize : 90 * 1024}
                }
            },

            {
                test: /\.txt/,
                type: 'asset/source'
            },

            {
                test: /\.css/,
                use: [miniCssExtractPlugin.loader, 'css-loader']
            },

            {
                test: /\.scss$/,
                use: [miniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            },

            {
                test: /\.hbs$/,
                loader: 'handlebars-loader'
            },
            
            
        ]
    },
    plugins: [
        new miniCssExtractPlugin({
            filename: 'styles.[contenthash].css'
        }),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Hello world',
            template: 'src/index.hbs',
            description: 'Some description'
        })
    ],

    mode: 'production'
}
