const path = require('path');
const HtmlWebPackPlugin = require( 'html-webpack-plugin' );

const examplesFolder = path.join(__dirname, 'examples');

module.exports = {
    context: __dirname,
    entry: path.join(examplesFolder, 'src/app'),
    output: {
        path: path.join(examplesFolder, 'dist'),
        filename: 'bundle.js',
        publicPath: '/',
    },
    devServer: {
        historyApiFallback: true,
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets: [
                                ['@babel/preset-env', {
                                    "targets": "defaults"
                                }],
                                '@babel/preset-react'
                            ]
                        }
                    }
                ]
            }
        ]
    },
    resolve: {
        alias: {
            '@profteam/modal': path.resolve('src/index'),
        },
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: path.join(examplesFolder, 'src/index.html'),
        })
    ]
};