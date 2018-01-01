import React from "react";
import { render } from "react-dom";

import Header from "./components/Header";

import "./scss/common/reset";
import "./scss/index";

// import runtime from "serviceworker-webpack-plugin/lib/runtime";

// if(window.location.href != 7777) {
//     const registeration = runtime.register();
// }

class Hello extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            now: Date.now()
        }

        this.handleClick = this.handleClick.bind(this);
    }

    //components安装
    componentDidMount() {
        this.timerID = setInterval(() => {
            this.setState({
                now: Date.now()
            })
        }, 1000);
    }

    //component卸载
    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    //设置点击事件
    handleClick() {
        this.setState({
            now: Date.now()
        })
    }

    render() {
        const obj = {
            a: 110,
            b: "true"
        }

        return (
            <div>
                <Header title="hello页面" aaa={ obj }/>
                <p onClick={ this.handleClick }>Hello World, this is { this.state.now }</p>
            </div>
        );
    }
}

render(
    <Hello />,
    document.querySelector("#root")
);
