import CleanWebpackPlugin from 'clean-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import UglifyJSPlugin from 'uglifyjs-webpack-plugin'

const path = require('path')

module.exports = {
    entry: path.resolve(__dirname, './src/index.js'),

    devtool: "source-map",

    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({template: path.resolve(__dirname,"./public/index.html")}),
        new UglifyJSPlugin()
    ],

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.css$/,
                use: ['style-loader','css-loader']
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                use: 'file-loader'
            }
        ]
    },

    resolve: {
        extensions: [".js",".jsx"]
    },


    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
        publicPath: '/'
    }
}