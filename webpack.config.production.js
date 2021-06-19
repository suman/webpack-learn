const path = require('path');
const miniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin }= require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: {
        'index': './src/index.js',
        'suman': './src/suman.js',
    },

    output: {
        filename: '[name][contenthash].js',
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
            filename: '[name].[contenthash].css'
        }),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            filename: 'helloworld.html',
            title: 'heading',
            template: 'src/page-template.hbs',
            description: 'Heading is here',
            chunks: ['index'],
            minify: false
        }),
        new HtmlWebpackPlugin({
            filename: 'suman.html',
            title: 'Suman Image',
            template: 'src/page-template.hbs',
            description: 'Suman image is here',
            chunks: ['suman'],
            minify: false
        })
    ],
    mode: 'production',
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    }
}
