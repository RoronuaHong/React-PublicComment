import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";

import Hello from "./containers/Hello";
import Todo from "./containers/Todo";

import "./scss/common/reset";
import "./scss/index";

// import runtime from "serviceworker-webpack-plugin/lib/runtime";

// if(window.location.href != 7777) {
//     const registeration = runtime.register();
// }

const store = configureStore();

render(
    <Provider store={ store }>
        <Hello />
    </Provider>,
    document.querySelector("#root")
);
