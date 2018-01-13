import React , { Component } from "react";
import { HashRouter, Route } from "react-router-dom";

import App from "../containers";
import SubRouter from "./SubRouter";

import createBrowserHistory from "history/createBrowserHistory";
const history = createBrowserHistory();

export default class AppRouter extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <HashRouter>
                <App>
                    <Route path="/" component={ SubRouter }></Route>
                </App>
            </HashRouter>
        );
    }
}