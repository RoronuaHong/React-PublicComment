const path = require("path");
const pkg = require("./package.json");
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const glob = require("glob");
const ServiceWorkerWebpackPlugin = require("serviceworker-webpack-plugin");

//设置路径
const distPath = path.resolve(__dirname, "dist");

const config = {
    entry: {
        main: "./src/index.js",

        //将第三方依赖单独打包
        // vendor: Object.keys(pkg.dependencies)
    },
    output: {
        publicPath: "",
        path: distPath,
        filename: "[name].[chunkhash:10].js",
        chunkFilename: "[id].chunk.js"
    },
    resolve: {
        extensions: [".js", ".css", ".scss", ".png", ".jpg", ".jpeg", ".gif"]
    },
    module: {
        rules: [
            /*将ES6转化为ES5、JSX转换为js*/
            {
                test: /\.(js|jsx)$/,
                exclude: [
                    path.join(__dirname, "node_modules")
                ],
                use: ["babel-loader"]
                // use: [
                //     {
                //         loader: "babel-loader",
                //         options: {
                //             presets: ["env"],
                //             plugins: [
                //                 "transform-runtime"
                //             ]
                //         }
                //     }
                // ]
            },
            /*压缩css*/
            {
                test: /\.(css|scss)$/,
                exclude: [
                    path.join(__dirname, "node_modules")
                ],
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [
                        {
                            loader: "css-loader",
                            options: {
                                minimize: true
                            }
                        },
                        {
                            loader: "postcss-loader",
                            options: {
                                ident: 'postcss',
                                plugins: [
                                    require('autoprefixer')({
                                        browsers: [
                                            'Chrome >= 35',
                                            'Firefox >= 38',
                                            'Edge >= 12',
                                            'Explorer >= 10',
                                            'iOS >= 8',
                                            'Safari >= 8',
                                            'Android 2.3',
                                            'Android >= 4',
                                            'Opera >= 12'
                                        ],
                                        cascade: true,
                                        add: true,
                                        remove: true
                                    })
                                ]
                            }
                        }
                    ]
                })
            },
            /*/!*压缩scss为css*!/
            {
                test: /\.scss$/,
                exclude: [
                    path.join(__dirname, "node_modules")
                ],
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [
                        // /!*将px转换为rem*!/
                        // {
                        //     loader: "webpack-px-to-rem",
                        //     query: {
                        //         // 1rem=npx 默认为 75
                        //         basePx: 75,
                        //         // 只会转换大于min的px 默认为0
                        //         // 因为很小的px（比如border的1px）转换为rem后在很小的设备上结果会小于1px，有的设备就会不显示
                        //         min: 1,
                        //         // 转换后的rem值保留的小数点后位数 默认为3
                        //         floatWidth: 2
                        //     }
                        // },
                        /!*压缩css*!/
                        {
                            loader: "css-loader",
                            options: {
                                minimize: true
                            }
                        },
                        {
                            loader: "sass-loader"
                        },
                        /!*自动配置前缀*!/
                        {
                            loader: "postcss-loader",
                            options: {
                                ident: 'postcss',
                                plugins: [
                                    require('autoprefixer')({
                                        browsers: [
                                            'Chrome >= 35',
                                            'Firefox >= 38',
                                            'Edge >= 12',
                                            'Explorer >= 10',
                                            'iOS >= 8',
                                            'Safari >= 8',
                                            'Android 2.3',
                                            'Android >= 4',
                                            'Opera >= 12'
                                        ],
                                        cascade: true,
                                        add: true,
                                        remove: true
                                    })
                                ]
                            }
                        }
                    ]
                })
            },*/
            /*压缩图片*/
            {
                test: /\.(png|svg|jpg|gif|jepg)$/,
                use: [
                    "url-loader?limit=819200&name=images/[name].[ext]",
                    "image-webpack-loader?{pngquant:{quality: '50-70', speed: 8}, mozjpeg: {quality: 50}}"
                ]
            }
        ]
    },
    plugins: [
        /*生成css*/
        new ExtractTextPlugin({
            filename: "[name].[hash].bundle.css",
            allChunks: true
        }),
        new ServiceWorkerWebpackPlugin({
            entry: path.join(__dirname, 'sw.js'),
            exclude: [
                path.join(__dirname, "node_modules")
            ]
        })
    ]
}

//获取index页面
const indexHtml = glob.sync("./src/index.html");

indexHtml.forEach(pathname => {
    const conf = {
        filename: "index.html",
        template: "./src/index.html",
        favicon: "./src/images/slimlogo.png",               //设置icon图标
        minify: {                                           //压缩HTML文件
            removeComments: true,                           //移除HTML中的注释
            collapseWhitespace: true                        //删除空白符与换行符
        },
        name: "react",
        title: "My Blog"
    }

    config.plugins.push(new HtmlWebpackPlugin(conf));
});

module.exports = config;