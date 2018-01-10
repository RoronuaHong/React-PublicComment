import React, { PureComponent } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import HomeHeader from "../../components/HomeHeader";
import Category from "../../components/Category";
import Ad from "./subpages/Ad";
import List from "./subpages/List";

class Home extends PureComponent {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        return (
            <React.Fragment>
                <HomeHeader cityName={ this.props.userinfo.cityName } history={ this.props.history } />
                <Category />
                <div style={{height: '15px'}}></div>
                <Ad />
                <List cityName={ this.props.userinfo.cityName } />
            </React.Fragment>
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

    }
}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(Home));