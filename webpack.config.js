const path = require('path');
const HTMLwebpackPlugin = require('html-webpack-plugin');
const miniCSSextractPlugin = require('mini-css-extract-plugin');



module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
    },
    plugins: [
        new HTMLwebpackPlugin({
            filename: './index.html',
            template: './src/index.html'
        }),
        new miniCSSextractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css',
        })

    ],
    module: {
        rules: [
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader'
                    }
                ]   
            },
            {
                test: /\.css$/,
                use: [
                    miniCSSextractPlugin.loader, 'css-loader'
                ]
            },
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader'
                }
            },
        ]
    }
}