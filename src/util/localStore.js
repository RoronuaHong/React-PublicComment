export default {
    getItem(key) {
        let value;
        try {
            value = localStorage.getItem(key);

            return value;
        } catch(ex) {
            console.log("localStorage.getItem报错, ", ex.message);
        }
    },
    setItem(key, item) {
        try {
            //ios safari 无痕模式下, 直接使用 localStorage.setItem 会报错
            localStorage.setItem(key, item);
        } catch(ex) {
            console.log("localStorage.setItem报错, ", ex.message);
        }
    },
    removeItem(key) {
        try {
            localStorage.removeItem(key);
        } catch(ex) {
            console.log("localStorage.setItem报错, ", ex.message);
        }
    }
}