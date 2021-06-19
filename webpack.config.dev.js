const path = require('path');
const { CleanWebpackPlugin }= require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
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
                use: ['style-loader', 'css-loader']
            },

            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },

            {
                test: /\.hbs$/,
                loader: 'handlebars-loader'
            },
        ]
    },
    mode: 'development',
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Hello world',
            template: 'src/index.hbs',
            description: 'Some description'
        })
    ],
    
    devServer: {
        contentBase: path.resolve(__dirname, './dist'),
        index: 'index.html',
        port: 9000,
        writeToDisk: true,
        host: "localhost.specialurl.com"
    }
}
