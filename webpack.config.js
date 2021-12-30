const path = require('path');
const HtmlWebPackPlugin = require( 'html-webpack-plugin' );

const srcFolder = path.join(__dirname, 'examples/src');
const distFolder = path.join(__dirname, 'examples/dist');

module.exports = {
    context: __dirname,
    entry: path.resolve(srcFolder, 'app.js'),
    output: {
        path: distFolder,
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
            '@profteam/modal': path.resolve(__dirname, 'src/index'),
        },
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: path.resolve(srcFolder, 'index.html'),
        })
    ]
};