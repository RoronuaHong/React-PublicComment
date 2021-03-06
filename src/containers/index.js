import React, { PureComponent } from "react";
import LocalStore from "../util/localStore";
import { CITYNAME } from "../config/localStoreKey";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as userInfoActions from "../actions/userinfo";
import * as loginActions from "../actions/islogin";
import { withRouter } from "react-router-dom";

class App extends PureComponent {
    constructor(props, context) {
        super(props, context);

        this.state = {
            initDone: false
        }
    }

    componentDidMount() {
        //从localStorage里面获取城市
        let cityName = LocalStore.getItem(CITYNAME);
        if(cityName == null) {
            cityName = "上海";
        }

        //将城市信息存储到redux中
        this.props.userInfoActions.update({
            cityName
        });

        setTimeout(() => {
            this.setState({
                initDone: true
            });
        });
    }

    componentDidUpdate() {
        //存储当前页面的路径
        this.props.loginActions.islogin({
            referrer: this.props.location.pathname
        })
    }

    render() {
        return (
            <React.Fragment>
                <div>
                    {
                        this.state.initDone ?
                            this.props.children
                            :
                            <div>loading...</div>
                    }
                </div>
            </React.Fragment>
        );
    }
}

function mapStateToProps(state) {
    return {

    }
}

function mapDispatchToProps(dispatch) {
    return {
        userInfoActions: bindActionCreators(userInfoActions, dispatch),
        loginActions: bindActionCreators(loginActions, dispatch)
    }
}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(App));