const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    name: 'std-react-reducers',
    mode:'development',
    entry: {
        app: './client'
    },
    module: {
        rules: [
            {
                test: /[\.js]$/, // .js 에 한하여 babel-loader를 이용하여 transpiling
                exclude: /node_module/,
                use: {
                    loader: "babel-loader",
                },
            },
            {
                test: /\.ts$/, // .ts 에 한하여 ts-loader를 이용하여 transpiling
                exclude: path.join(__dirname, 'node_modules'),
                use: {
                    loader: "ts-loader",
                },
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin()
    ],
    devServer: {
        host:'localhost',
        port: 3000
    },

}
