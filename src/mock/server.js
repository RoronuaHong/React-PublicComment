const express = require("express"),
    bodyParser = require("body-parser"),
    homeAdData = require("./home/ad"),
    homeListData = require("./home/list"),
    SearchListData = require("./search/search"),
    infoData = require("./detail/info"),
    commentData = require("./detail/comment"),
    orderListData = require("./orderlist/orderlist"),
    app = express();

    app.use(bodyParser.json({limit: '1mb'}));  //body-parser 解析json格式数据
    app.use(bodyParser.urlencoded({            //此项必须在 bodyParser.json 下面,为参数编码
        extended: true
    }));

app
    .get("/", (req, res) => {
        res.send("My Api");
    })
    .get("/api/1", (req, res) => {
        res.send("api1");
    })
    //获取homead
    .get("/api/homead", (req, res) => {
        res.send(homeAdData);
    })
    //首页 —— 推荐列表
    .get("/api/homelist/:city/:page", (req, res) => {
        res.send(homeListData);
    })
    //获取搜索页
    .get("/api/search/:page/:city/:category/:keyword?", (req, res) => {
        res.send(SearchListData);
    })
    //获取商户详情
    .get("/api/detail/info/:id", (req, res) => {
        res.send(infoData);
    })
    //获取商户评价
    .get("/api/detail/comment/:page/:id", (req, res) => {
        res.send(commentData);
    })
    //获取用户订单
    .get("/api/orderlist/:name", (req, res) => {
        res.send(orderListData);
    })
    //提交数据
    .post("/api/submitComment", (req, res) => {
        res.send({
            errno: 0
        });
    })
    .all("/api/2", (req, res) => {
        res.send("api2");
    })
    .post("/api/post", (req, res) => {
        res.send("api/post");
    });

app.listen(3001, () => {
    console.log("run!!!");
})