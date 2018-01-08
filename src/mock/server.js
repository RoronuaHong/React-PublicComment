const express = require("express"),
    bodyParser = require('body-parser'),
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
    .all("/api/2", (req, res) => {
        res.send("api2");
    })
    .post("/api/post", (req, res) => {
        res.send("api/post");
    });

app.listen(3001, () => {
    console.log("run!!!");
})