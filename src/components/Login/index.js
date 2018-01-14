import React, { PureComponent } from "react";
import { DOWNCOUNT } from "../../config/localStoreKey";
import localStore from "../../util/localStore";

import "./style";

class Login extends PureComponent {
    constructor(props, context) {
        super(props, context);

        this.state = {
            username: "",
            veritext: "",
            seconds: 60,
            isClick: false
        }

        this.changeHandle = this.changeHandle.bind(this);
        this.clickHandle = this.clickHandle.bind(this);
        this.changeVeri = this.changeVeri.bind(this);
        this.existDownCount = this.existDownCount.bind(this);
        this.setIntervalTime = this.setIntervalTime.bind(this);
    }

    componentDidMount() {
        const downcount = localStore.getItem(DOWNCOUNT);

        if(downcount) {
            this.setState({
                veritext: downcount + "秒",
                isClick: true
            });
        } else {
            this.setState({
                veritext: "发送验证码"
            });
        }

        this.existDownCount();
    }

    changeHandle(e) {
        this.setState({
            username: e.target.value
        });
    }

    clickHandle() {
        const username = this.state.username;
        this.props.loginHandle(username);
    }

    existDownCount() {
        let downcount = localStore.getItem(DOWNCOUNT);
        if (downcount && downcount > 0) {
            this.setIntervalTime(downcount);
        }
    }

    //验证码倒计时(使用localStorage进行存储和读取)
    changeVeri() {
        //异步执行
        this.setState({
            isClick: true
        });

        if(!this.state.isClick) {
            let seconds = this.state.seconds;

            this.setIntervalTime(seconds);
        }
    }

    setIntervalTime(seconds) {
        this.timer = setInterval(() => {
            if(seconds > 0) {
                seconds--;
                this.setState({
                    veritext: seconds + "秒"
                });

                localStore.setItem(DOWNCOUNT, seconds);
            } else {
                clearInterval(this.timer);
                this.setState({
                    veritext: "重新发送",
                    isClick: false
                });
                localStore.removeItem(DOWNCOUNT);
            }
        }, 1000);
    }

    render() {
        return (
            <div id="login-container">
                <div className="input-container phone-container">
                    <i className="icon-tablet"></i>
                    <input
                        type="text"
                        placeholder="输入手机号"
                        onChange={ this.changeHandle }
                        value={ this.state.username }
                    />
                </div>
                <div className="input-container password-container">
                    <i className="icon-key"></i>
                    <button onClick={ this.changeVeri }>{ this.state.veritext }</button>
                    <input type="text" placeholder="输入验证码"/>
                </div>
                <button className="btn-login" onClick={ this.clickHandle }>登录</button>
            </div>
        );
    }
}

export default Login;