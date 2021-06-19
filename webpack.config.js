const path = require('path');
const TerserPlugin = require('terser-webpack-plugin')
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
            
            
        ]
    },
    mode: 'none',
    plugins: [
        new TerserPlugin(),
        new miniCssExtractPlugin({
            filename: 'styles.css'
        }),
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: [
                '**/*',
                path.join(process.cwd(), 'build/**/*')
            ]
        }),
        new HtmlWebpackPlugin()
    ]
}
