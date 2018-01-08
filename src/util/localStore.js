export default {
    getItem(key) {
        let value;
        try {
            value = localStorage.getItem(key);
        } catch(ex) {
            //开发环境下提示error
            if(__DEV__) {
                console.log("localStorage.getItem报错, ", ex.message);
            }
        }
    },
    setItem(key, item) {
        try {
            //ios safari 无痕模式下, 直接使用 localStorage.setItem 会报错
            localStorage.setItem(key, item);
        } catch(ex) {
            //开发模式下提示error
            if(__DEV__) {
                console.log("localStorage.setItem报错, ", ex.message);
            }
        }
    }
}