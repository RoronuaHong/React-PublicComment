import "whatwg-fetch";
import "es6-promise";

export function getData() {

    // "api/1" 获取字符串
    const result = fetch("/api/1", {
        credentials: "includes",
        headers: {
            "Accept": "application/json, text/plain, */*"
        }
    });

    //返回数据
    result.then(res => {
        return res.text();
    }).then(text => {
        console.log(text);
    });

    const results = fetch("/api/2", {
        credentials: "include",
        headers: {
            "Accept": "application/json, text/plain, */*"
        }
    });

    results.then(res => {
        return res.text();
    }).then(text => {
        console.log(text);
    });
}

export function postData() {

    // api/post 提交数据
    const result = fetch("api/post", {
        methods: "POST",
        credentials: "include",
        headers: {
            "Accept": "application/json, text/plain, */*",
            "Content-Type": "application/x-www-form-urlencoded"
        },
        //注意 post 时候参数的形式
        body: "a=100&b=200"
    });

    result.then(res => {
        return res.json();
    }).then(json => {
       console.log(json);
    });
}