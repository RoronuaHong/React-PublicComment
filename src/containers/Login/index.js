import React, { PureComponent } from "react";
import Header from "../../components/Header";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as userinfoActions from "../../actions/userinfo";
import * as loginActions from "../../actions/islogin";
import Logins from "../../components/Login";

class Login extends PureComponent {
    constructor(props, context) {
        super(props, context);

        this.state = {
            checking: true
        }

        this.doCheck = this.doCheck.bind(this);
        this.loginHandle = this.loginHandle.bind(this);
        this.goUserPage = this.goUserPage.bind(this);
    }

    componentDidMount() {
        this.doCheck();
    }

    //登录成功之后的处理
    loginHandle(username) {

        //保存用户名
        const actions = this.props.userinfoActions,
            userinfo = this.props.userinfo,
            params = this.props.match.params.router;

        userinfo.username = username;
        actions.update(userinfo);

        //跳转链接
        if(params) {
            //跳转到指定的页面
            this.props.history.push(decodeURIComponent(params));
        } else {
            //跳转到默认的页面——即用户中心页
            this.goUserPage();
        }
    }

    doCheck() {
        const userinfo = this.props.userinfo;

        if(userinfo.username) {
            //已经登录
            this.goUserPage();
        } else {
            //尚未登录
            this.setState({
                checking: false
            });
        }
    }

    goUserPage() {
        if(this.props.referrer.referrer.indexOf("User") > -1) {
            this.props.history.push("/");
        } else {
            this.props.history.push("/User");
        }
    }

    render() {
        return (
            <div>
                <Header title="用户登录" />
                {
                    this.state.checking ?
                        <div>Loading...</div>
                        :
                        <Logins loginHandle={ this.loginHandle }/>
                }
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        userinfo: state.userinfo,
        referrer: state.islogin
    }
}

function mapDispatchToProps(dispatch) {
    return {
        userinfoActions: bindActionCreators(userinfoActions, dispatch),
        loginActions: bindActionCreators(loginActions, dispatch)
    }
}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(Login));
