export default function throttle(fn, duraction, delay) {
    let startTime = new Date();

    return function() {
        let endTime = new Date(),
            _this = this,
            args = Array.prototype.slice.call(arguments);

        clearTimeout(fn.timer);

        if(endTime - startTime >= duraction) {
            fn.apply(_this, args);
            startTime = endTime;
        } else {
            fn.timer = setTimeout(() => {
                fn.apply(_this, args);
            }, delay);
        }
    }
}