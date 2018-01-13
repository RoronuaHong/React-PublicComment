import "whatwg-fetch";
import "es6-promise";

//将对象拼接成 key1=value1&key2=value2&key3=value3 的字符串形式
function obj2params(obj) {
    let result = "",
        item;

    for(item in obj) {
        result += "&" + item + "=" + encodeURIComponent(obj[item]);
    }

    if(result) {
        result = result.slice(1);
    }

    return result;
}

//发送 post 请求
export function post(url, paramsObj) {
    const result = fetch(url, {
        method: "POST",
        credentials: "include",
        headers: {
            "Accept": "application/json, text/plain, */*",
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: obj2params(paramsObj)
    });

    return result;
}