/** For Webpack in production only **/
const config = require("./webpack.common.config");
const webpack = require("webpack");
const merge = require("webpack-merge");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const autoprefixer = require("autoprefixer");
const path = require("path");

const srcPath = path.join(__dirname, "src");
const distPath = path.join(__dirname, "dist");

/** Update config **/
const prodConfig = merge(config, {
    output: {
        path: distPath,
        filename: "[name].js"
    },

    devtool: "source-map",

    module: {
        rules: [
            // For image files
            {
                test: /\.(jpe?g|png|gif|svg)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "file-loader",
                        query: {
                            name: "assets/images/[name].[ext]",
                            publicPath: "./../"
                        }
                    }
                ]
            },

            // For SCSS files
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: ExtractTextPlugin.extract({
                    use: [
                        { 
                            loader: "css-loader",
                            options: {
                                minimize: true
                            }
                        },
                        "postcss-loader",
                        "sass-loader?sourceMap"
                    ],
                })
            },
        ]
    },

    plugins: [
        // Set the environment variables
        new webpack.DefinePlugin({
            "process.env": {
                "NODE_ENV": JSON.stringify("production"),
                "PUBLIC_URL": JSON.stringify(process.env.PUBLIC_URL)
            }
        }),

        // Extract Sass to CSS file
        new ExtractTextPlugin({
            filename: (getPath) => {
                return getPath("[name].css");
            }
        }),

        // For Autoprefixer
        new webpack.LoaderOptionsPlugin({
            options: {
                postcss: [
                    autoprefixer()
                ]
            }
        }),

        // Minify
        new webpack.optimize.UglifyJsPlugin({
            compress: { 
                warnings: false 
            },
            sourceMap: true
        })
    ]
});

module.exports = function() {
    return [
        prodConfig,

        // Copy the .htaccess file
        {
            context: srcPath,

            entry: "./.htaccess",

            // Unfortunately, this creates an extra "main" file.
            output: {
                path: distPath,
                filename: "[name]"
            },

            module: {
                rules: [
                    {
                        test: /\.htaccess$/,
                        exclude: /node_modules/,
                        use: [
                            {
                                loader: "file-loader",
                                query: {
                                    name: "[name]"
                                }
                            }
                        ]
                    }
                ]
            }
        }
    ];
};
