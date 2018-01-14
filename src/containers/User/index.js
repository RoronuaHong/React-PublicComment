import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router-dom";
import * as userinfoActions from "../../actions/userinfo";
import Header from "../../components/Header";
import UserInfo from "../../components/UserInfo";
import OrderList from "./subpages/OrderList";

class User extends PureComponent {
    constructor(props, context) {
        super(props, context);
    }

    componentDidMount() {
        if(!this.props.userinfo.username) {
            this.props.history.push("/login");
        }
    }

    render() {
        const userinfo = this.props.userinfo;

        return (
            <div>
                <Header title="用户中心" history={ this.props.history }/>
                <UserInfo userinfo={ userinfo }/>
                <OrderList userinfo={ userinfo } history={ this.props.history }/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        userinfo: state.userinfo
    }
}

function mapDispatchToProps(dispatch) {
    return {
        userinfoActions: bindActionCreators(userinfoActions, dispatch)
    }
}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(User));