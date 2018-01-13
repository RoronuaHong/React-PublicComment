import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as userinfoActions from "../../../actions/userinfo";
import * as storeActions from "../../../actions/store";
import { withRouter } from "react-router-dom";

import BuyAndStore from "../../../components/BuyAndStore";

class Buy extends PureComponent {
    constructor(props, context) {
        super(props, context);

        this.state = {
            isStore: false
        }

        this.buyHandle = this.buyHandle.bind(this);
        this.storeHandler = this.storeHandler.bind(this);
        this.loginCheck = this.loginCheck.bind(this);
        this.checkStoreState = this.checkStoreState.bind(this);
    }

    componentDidMount() {
        this.checkStoreState();
    }

    //检验当前商户是否已经被收藏
    checkStoreState() {
        //验证登录
        // const loginFlag = this.loginCheck();
        //
        // if(!loginFlag) {
        //     return;
        // }

        const id = this.props.match.params.id,
            store = this.props.store;

        store.some(item => {
            if(item.id === id) {
                this.setState({
                    isStore: true
                });
            }

            return item.id === id;
        });
    }

    //购买事件
    buyHandle() {
        //验证登录
        const loginFlag = this.loginCheck();

        if(!loginFlag) {
            return;
        }

        //购买流程


        //跳转到用户主页
        this.props.history.push("/User");
    }

    //收藏事件
    storeHandler() {
        //验证登录
        const loginFlag = this.loginCheck();

        if(!loginFlag) {
            return;
        }

        const id = this.props.match.params.id,
            storeActions = this.props.storeActions;

        if(this.state.isStore) {
            //取消收藏
            storeActions.deletes({ id });
        } else {
            //收藏
            storeActions.add({ id });
        }

        //修改状态
        this.setState({
            isStore: !this.state.isStore
        });
    }

    //验证登录
    loginCheck() {
        const pathname = this.props.location.pathname,
            userinfo = this.props.userinfo;

        if(!userinfo.username) {

            //跳转到登录页面
            this.props.history.push("/Login/" + encodeURIComponent(pathname));

            return false;
        }

        return true;
    }

    render() {
        return (
            <React.Fragment>
                <BuyAndStore
                    isStore={ this.state.isStore }
                    buyHandle={ this.buyHandle }
                    storeHandle={ this.storeHandler }
                />
            </React.Fragment>
        );
    }
}

function mapStateToProps(state) {
    return {
        userinfo: state.userinfo,
        store: state.store
    }
}

function mapDispatchToProps(dispatch) {
    return {
        userinfoActions: bindActionCreators(userinfoActions, dispatch),
        storeActions: bindActionCreators(storeActions, dispatch)
    }
}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(Buy));