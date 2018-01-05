const fs = require('fs')
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const root_dir = fs.realpathSync(process.cwd());

module.exports = {
    entry: root_dir + "/src/main.js",//已多次提及的唯一入口文件
    output: {
        path: root_dir + "/build",//打包后的文件存放的地方
        filename: "bundle.js"//打包后输出文件的文件名
    },
    devtool: 'none',
    module: {
        rules: [
            {
                test: /\.js[x]?$/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "env", "react"
                        ],
                        cacheDirectory: true,
                        babelrc: false,
                    },
                },
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader', 
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            localIdentName: '[name]__[local]--[hash:base64:5]',
                        }
                    },
                ],
                exclude: /node_modules/,
            },
        ],
    },
    devServer: {
        contentBase: "./build/",
        host: '0.0.0.0',
        port: 8081,
        inline: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: root_dir + "/public/index.tmpl.html",
        }),
        // new webpack.HotModuleReplacementPlugin(),
    ],
};
