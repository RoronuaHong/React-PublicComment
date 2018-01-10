import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router-dom";
import * as userInfoActions from "../../actions/userinfo";
import LocalStore from "../../util/localStore";
import { CITYNAME } from "../../config/localStoreKey";

import Header from "../../components/Header";
import CurrentCity from "../../components/CurrentCity";
import CityList from "../../components/CityList";

class City extends Component {
    constructor(props, context) {
        super(props, context);

        this.changeCityFn = this.changeCityFn.bind(this);
    }

    changeCityFn(newCity) {
        if(newCity == null) {
            return;
        }
        //修改 redux
        const userinfo = this.props.userinfo;
        userinfo.cityName = newCity;
        this.props.userInfoActions.update(userinfo);

        //修改 localStorage
        LocalStore.setItem(CITYNAME, newCity);

        //跳转到首页
        this.props.history.push("/");
    }

    render() {
        return (
            <div>
                <Header title="选择城市"/>
                <CurrentCity cityName={ this.props.userinfo.cityName } />
                <CityList changeCityFn={ this.changeCityFn }/>
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
        userInfoActions: bindActionCreators(userInfoActions, dispatch)
    }
}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(City));