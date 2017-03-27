/** For Webpack in development only **/
const config = require("./webpack.common.config");
const webpack = require("webpack");
const merge = require("webpack-merge");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const autoprefixer = require("autoprefixer");
const path = require("path");

const srcPath = path.join(__dirname, "src");

/** Update config **/
const devConfig = merge(config, {
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
                            publicPath: "./"
                        }
                    }
                ]
            },

            // For SCSS files
            {
                test: /\.scss?$/,
                exclude: /node_modules/,
                use: [
                    "style-loader",
                    "css-loader",
                    "postcss-loader",
                    "sass-loader?sourceMap",
                ]
            }
        ]
    },

    plugins: [
        // Set the environment variables
        new webpack.DefinePlugin({
            "process.env": {
                "NODE_ENV": JSON.stringify("development"),
                "PUBLIC_URL": JSON.stringify(process.env.PUBLIC_URL)
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

        // For HMR
        new webpack.HotModuleReplacementPlugin(),

        // Prints more readable module names in the browser console on HMR updates
        new webpack.NamedModulesPlugin()
    ],

    // Set up webpack-dev-server
    devServer: {
        contentBase: srcPath,
        inline: true,
        hot: true,
        historyApiFallback: true
        // stats: "errors-only"
    }
});

module.exports = function() {
    return devConfig;
};
