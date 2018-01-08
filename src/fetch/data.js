import { get } from "./get";
import { post } from "./post";

export function getData() {

    // api/1 获取字符串
    const result = get("api/1");

    result.then(res => {
        return res.text();
    }).then(text => {
        console.log(text);
    });

    // api/2 获取json
    const result1 = get("api/2");

    result1.then(res => {
        return res.json();
    }).then(json => {
        console.log(json);
    });
}

export function postData() {

    // api/2 提交数据
    const result = post("api/post", {
        a: 102,
        b: 103
    });

    result.then(res => {
        return res.json();
    }).then(json => {
        console.log(json);
    });
}