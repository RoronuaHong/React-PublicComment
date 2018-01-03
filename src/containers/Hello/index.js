import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as userinfoActions from "../../actions/userinfo";

import A from "../../components/A";
import B from "../../components/B";
import C from "../../components/C";

class Hello extends React.PureComponent {

    componentDidMount() {

        //模拟登录
        this.props.userinfoActions.login({
            userid: "321",
            city: "ShangHai",
            age: 10
        })
    }

    render() {
        return (
            <div>
                <p>Hello World</p>
                <hr/>
                <A userinfo={ this.props.userinfo } />
                <hr/>
                <B userinfo={ this.props.userinfo } />
                <hr/>
                <C actions={ this.props.userinfoActions } />
            </div>
        );
    }
}

//将redux的state传给props
function mapStateToProps(state) {
    return {
        userinfo: state.userinfo
    }
}

//将redux的action传给props
function mapDispatchToProps(dispatch) {
    return {
        userinfoActions: bindActionCreators(userinfoActions, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Hello);

