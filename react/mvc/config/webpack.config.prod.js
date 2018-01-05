const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const config = require("./webpack.config");

config.devtool = "none";
config.plugins.push(new webpack.optimize.OccurrenceOrderPlugin());
config.plugins.push(new webpack.optimize.UglifyJsPlugin());



module.exports = config;
