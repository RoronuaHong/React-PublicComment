import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";

import AppRouter from "./routers/AppRouter";

import "./scss/common/reset";
import "./scss/common/fonts";
import "./scss/index";

let store = configureStore();

render(
    <Provider store={ store }>
        <AppRouter />
    </Provider>,
    document.querySelector("#root")
);
