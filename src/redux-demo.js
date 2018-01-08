import { createStore } from "redux";

export default function() {
    function counter(state = 0, action) {
        switch(action.type) {
            case "INCREMENT":
                return state + 1;
            case "DECREMENT":
                return state - 1;
            default:
                return state;
        }
    }

    const store = createStore(counter);

    //设置订阅
    store.subscribe(() => {
        console.log("fn1: ", store.getState());
    });

    store.subscribe(() => {
        console.log("fn2: ", store.getState());
    });

    //设置发布
    store.dispatch({
        type: "INCREMENT"
    });

    store.dispatch({
        type: "INCREMENT"
    });

    store.dispatch({
        type: "DECREMENT"
    });
}