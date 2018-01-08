import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import HomeHeader from "../../components/HomeHeader";

class Home extends PureComponent {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        return (
            <React.Fragment>
                <HomeHeader cityName={ this.props.userinfo.cityName } />
                <Link to="/list">to list</Link>
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

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);