const merge = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
    devtool: "inline-source-map",
    devServer: {
        contentBase: "./src",
        compress: true,
        port: 7777,
        proxy: {
            "/api": {
                target: "http://localhost:3001",
                secure: false
            }
        }
    }
});