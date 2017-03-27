const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

const srcPath = path.join(__dirname, "src");

module.exports = {
    context: srcPath,

    cache: true,

    entry: {
        "vendor": [
            "react", 
            "react-dom",
            "react-router",
            "redux", 
            "react-redux",
            "react-router-redux",
            "classnames", 
            "axios"
        ],

        "giftCard/build": [
            "./giftCard/",
            "./assets/scss/giftCard.scss"
        ]
    },

    output: {
        path: srcPath,
        filename: "[name].js"
    },

    resolve: {
        extensions: [".js", ".jsx"]
    },

    module: {
        rules: [
            // For JS/JSX files
            { 
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: [
                    "react-hot-loader/webpack",
                    {
                        loader: "babel-loader",
                        query: {
                            presets: [
                                "react",
                                ["es2015", { modules: false } ]
                            ],
                            plugins: ["transform-object-rest-spread"]
                        }
                    }
                ],
            }
        ]
    },

    plugins: [
        // Group files into common chunks
        new webpack.optimize.CommonsChunkPlugin({
            name: ["vendor"],
            filename: "assets/js/[name].js"
        }),

        // Create HTML template
        new HtmlWebpackPlugin({
            template: path.join(srcPath, "index-tpl.html"),
            title: "Gift Card - Home",
            filename: "index.html",
            hash: true,
            chunks: [
                "vendor",
                "giftCard/build"
            ]
        })
    ]
};
