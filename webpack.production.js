const path = require("path"),
    webpack = require("webpack"),
    HtmlWebpackPlugin = require("html-webpack-plugin"),
    ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: {
        app: path.resolve(__dirname, "/src/index.js"),

        //将第三方依赖单独打包
        vendor: [
            "react",
            "react-dom",
            "react-redux",
            "react-router",
            "react-router-dom",
            "redux",
            "es6-promise",
            "whatwg-fetch"
        ]
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)?$/,
                exclude: /(node_modules|bower_components)/,
                loader: "babel-loader",
                query: {
                    presets: ["env", "react"]
                }
            },
            {
                test: /\.(scss|css)?$/,
                exclude: /(node_modules|bower_components)/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader!sass-loader"
                })
            },
            {
                test: /\.(png|jpg|gif|jepg|bmp)$/,
                exclude: /(node_modules|bower_components)/,
                loader: "file-loader",
                options: {
                    name: "img/[name].[ext]"
                }
            },
            {
                test: /\.(png|woff|woff2|svg|ttf|eot)($|\?)/i,
                exclude: /(node_modules|bower_components)/,
                loader: "file-loader",
                options: {
                    name: "fonts/[name].[ext]"
                }
            }
        ]
    },
    output: {
        path: __dirname + "/build",
        filename: "/js/[name].[chunkhash:8].js"
    },
    resolve: {
        extensions: [".js", ".css", ".scss", ".png", ".jpg", ".jpeg", ".gif"]
    },
    plugins: [
        //webpack 内置的 banner-plugin
        new webpack.BannerPlugin("Copyright by slimhong."),

        //html 模板插件
        new HtmlWebpackPlugin({
            template: __dirname + "/src/index.html"
        }),

        //定义为生产环境, 编译 React 时压缩到最小
        new webpack.DefinePlugin({
            "process.env": {
                "NODE_ENV": JSON.stringify(process.env.NODE_ENV)
            }
        }),

        new webpack.optimize.UglifyJSPlugin({
            compress: {
                warnings: false
            }
        }),

        //分离CSS和JS文件
        new ExtractTextPlugin("[name].[chunkhash:8].css"),

        //提供公共代码
        new webpack.optimize.CommonChunkPlugin({
            name: "vendor",
            filename: "[name].[chunkhash:8].js"
        }),

        //可在业务 js 代码中使用 __DEV__ 判断是否是dev模式 (dev模式下可以提示)
        new webpack.DefinePlugin({
            __DEV__: JSON.stringify(JSON.parse((process.env,NODE_ENV == "dev") || "false"))
        })
    ]
}
