// const path = require("path"),
//     webpack = require("webpack"),
//     HtmlWebpackPlugin = require("html-webpack-plugin"),
//     OpenBrowserPlugin = require("open-browser-webpack-plugin");
//
// module.exports = {
//     entry: path.resolve(__dirname, "src/index"),
//     output: {
//         path: __dirname + "/build",
//         filename: "bundle.js"
//     },
//     resolve: {
//         extensions: [".js", "jsx", ".css", ".scss", ".png", ".jpg", ".jpeg", ".gif"]
//     },
//     module: {
//         rules: [
//             {
//                 test: /\.(js|jsx)?$/,
//                 exclude: /(node_modules|bower_components)/,
//                 loader: "babel-loader",
//                 query: {
//                     presets: ["env", "react"]
//                 }
//             },
//             {
//                 test: /\.(scss|css)?$/,
//                 exclude: /(node_modules|bower_components)/,
//                 use: [
//                     "style-loader",
//                     {
//                         loader: "css-loader",
//                         options: {
//                             importLoaders: 1
//                         }
//                     },
//                     "postcss-loader",
//                     "sass-loader"
//                 ]
//             },
//             {
//                 test: /\.(png|jpg|gif|jepg|bmp)$/,
//                 exclude: /(node_modules|bower_components)/,
//                 loader: "file-loader"
//             },
//             {
//                 test: /\.(png|woff|woff2|svg|ttf|eot)($|\?)/i,
//                 exclude: /(node_modules|bower_components)/,
//                 loader: "file-loader"
//             }
//         ]
//     },
//     plugins: [
//         //html 模板插件
//         new HtmlWebpackPlugin({
//             template: __dirname + "/src/index.html"
//         }),
//
//         //热加载插件
//         new webpack.HotModuleReplacementPlugin(),
//
//         //打开浏览器
//         new OpenBrowserPlugin({
//             url: "http://localhost:8080"
//         }),
//
//         //可在业务 js 代码中使用 __DEV__ 判断是否是dev模式 (dev模式下可以提示)
//         new webpack.DefinePlugin({
//             __DEV__: JSON.stringify(JSON.parse((process.env.NODE_ENV == "dev") || "false"))
//         })
//     ],
//     devServer: {
//         proxy: {
//             //凡是 'api' 开头的 http 请求, 都会被代理到 localhost.
//             //express 代码在./mock, 启动命令为 npm run mock.
//             "/api": {
//                 target: "http://localhost:3000",
//                 secure: true
//             }
//         },
//         contentBase: "./public",    //本地服务器
//         historyApiFallback: true,   //不跳转
//         inline: true,               //实时刷新
//         hot: true                   //使用热插件 HotModule
//     }
// }

const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const op = require('open-browser-webpack-plugin')
const webpack = require('webpack')

module.exports = {
    entry: path.resolve(__dirname, 'src/index'),
    output: {
        path: __dirname + '/build',
        filename: "bundle.js"
    },
    resolve: {
        extensions: ['.js','jsx']
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                include: /src/,
                loader: "babel-loader"
            },
            {
                test: /\.css$/,
                use : [
                    {
                        loader : 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options : {
                            plugins : function() {
                                return [
                                    require('autoprefixer')({
                                        broswers : ['last 5 versions']
                                    })
                                ];
                            }
                        }
                    }
                ]
            },
            {
                test: /\.less$/,
                loader: 'style-loader!css-loader!less-loader'
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader'
            },
            {
                test: /\.(png|jpg|svg|gif|jpeg|bmp)$/,
                loader: 'url-loader',
                options: {
                    limit: 5000
                }
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            __DEV__: JSON.stringify(JSON.parse((process.env.NODE_ENV == 'dev') || 'false'))
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.LoaderOptionsPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: __dirname + '/src/index.html'
        }),
        new op({
            url: 'http://localhost:8000'
        })
    ],
    devServer: {
        //此处是webpack-dev-server的配置
        proxy: {
            '/api': {
                target: 'http://localhost:3000',
                secure:false
            }
        },
        contentBase: './public',
        historyApiFallback: true,
        inline: true,
        hot: true
    }
}