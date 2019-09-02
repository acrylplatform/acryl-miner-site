const { VueLoaderPlugin } = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    mode: 'production',
    entry: {
        app: './src/main.js',
        style: './css/style.css'
    },
    output: {
        filename: '[name].[contenthash].js'
    },
    module: {
        rules: [
        {
            test: /\.js$/,
            loader: ['babel-loader']
        },
        {
            test: /\.vue$/,
            loader: 'vue-loader'
        },
        {
            test: /\.css$/,
            use: [
                MiniCssExtractPlugin.loader,
                {
                    loader: 'css-loader',
                    options: { url: false }
                }
            ]
        },
        ]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            inject: false,
            filename: 'index.html',
            template: './src/template.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'style.[contenthash].css',
          }),
    ]
}