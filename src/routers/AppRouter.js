import React , { Component } from "react";
import { Router, Route } from "react-router-dom";

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
            <Router history={ history }>
                <App>
                    <Route path="/" component={ SubRouter }></Route>
                </App>
            </Router>
        );
    }
}