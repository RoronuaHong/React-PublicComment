import React, { PureComponent } from "react";

import "./style";

class Login extends PureComponent {
    constructor(props, context) {
        super(props, context);

        this.state = {
            username: "",
            veritext: "发送验证码",
            seconds: 10,
            isClick: false
        }

        this.changeHandle = this.changeHandle.bind(this);
        this.clickHandle = this.clickHandle.bind(this);
        this.changeVeri = this.changeVeri.bind(this);
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

    //验证码倒计时(使用localStorage进行存储和读取)
    changeVeri() {
        this.setState({
            isClick: true
        });

        if(!this.state.isClick) {
            let seconds = this.state.seconds;

            this.timer = setInterval(() => {
                if(seconds > 0) {
                    seconds--;
                    this.setState({
                        veritext: seconds + "秒"
                    });
                } else {
                    clearInterval(this.timer);
                    this.setState({
                        veritext: "重新发送",
                        isClick: false
                    });
                }
            }, 1000);
        }
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