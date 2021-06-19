const path = require('path');
const { CleanWebpackPlugin }= require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: {
      'hello-world':  './src/index.js',
      'suman':  './src/suman.js'
    },
    output: {
        filename: '[name].js',
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
            filename: 'hello-world.html',
            chunks:['hello-world'],
            title: 'Hello world',
            template: 'src/page-template.hbs',
            description: 'Some description'
        }),

        new HtmlWebpackPlugin({
            filename: 'suman.html',
            chunks:['suman'],
            title: 'Suman',
            template: 'src/page-template.hbs',
            description: 'Some description'
        })
    ],
    
    devServer: {
        contentBase: path.resolve(__dirname, './dist'),
        index: 'index.html',
        port: 9000,
        writeToDisk: true,
        host: "localhost"
    }
}
