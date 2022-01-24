const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    name: 'std-react-reducers',
    mode:'development',
    entry: {
        app: './client.tsx'
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/,
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
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].ts',
        publicPath: '/dist'
    }
}
