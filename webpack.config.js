const path = require('path');
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    entry: path.resolve(__dirname, 'src/client'),

    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'js/app.bundle.[hash].js'
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
        ],
    },

    resolve: {
        extensions: ['.js', '.vue'],
        alias: {
            'vue$' : 'vue/dist/vue.esm.js'
        },
    },

    plugins: [
        new VueLoaderPlugin(),
        new CleanWebpackPlugin(['public']),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'static/index.html'),
        }),
    ],

};
