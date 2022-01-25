import path from 'path';
import ReactRefreshPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';

const config = {
    name: 'std',
    mode: 'development',
    devtool: 'eval',
    resolve: {
        extensions: ['.js', '.jsx', '.tsx', '.ts'],
    },
    entry: {
        app: './client',
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            options: { plugins: ['react-refresh/babel'] },
        }, {
            test: /\.tsx?$/,
            loader: 'ts-loader',
            exclude: path.join(__dirname, 'node_modules'),
        }],
    },
    plugins: [
        new ReactRefreshPlugin(),
        new ForkTsCheckerWebpackPlugin()
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js',
        publicPath: '/dist/',
    },
    devServer: {
        contentBase: path.join(__dirname, "public"), // 콘텐츠를 제공할 경로지정
        compress: true, // 모든 항목에 대해 gzip압축 사용
        hot: true, // HRM(새로 고침 안해도 변경된 모듈 자동으로 적용)
        port: 9000, // 접속 포트 설정
    }
}

export default config;