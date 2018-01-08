import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";

import AppRouter from "./routers/AppRouter";

import { getData, postData } from "./fetch/data";

import "./scss/common/reset";
import "./scss/index";

let store = configureStore();

getData();
postData();

render(
    <Provider store={ store }>
        <AppRouter />
    </Provider>,
    document.querySelector("#root")
);
