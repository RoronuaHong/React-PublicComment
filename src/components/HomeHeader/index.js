import React, { PureComponent } from "react";
import { Link } from "react-router-dom";

import SearchInput from "../SearchInput";

import "./style";

class HomeHeader extends PureComponent {
    constructor(props, context) {
        super(props, context);

        this.enterHandle = this.enterHandle.bind(this);
    }

    enterHandle(value) {
        this.props.history.push("/search/all/" + encodeURIComponent(value));
    }

    render() {
        return (
            <React.Fragment>
                <div className="home-header clearfix">
                    <div className="header-city float-left">
                        <Link to="/city">
                            { this.props.cityName }
                            &nbsp;
                            <i className="icon-angle-down"></i>
                        </Link>
                    </div>
                    <div className="header-user-center float-right">
                        <Link to="/login">
                            <i className="icon-user"></i>
                        </Link>
                    </div>
                    <div className="header-search">
                        <div className="search-container">
                            <i className="icon-search"></i>
                            <SearchInput value="" enterHandle={ this.enterHandle } />
                        </div>
                    </div>
                </div>
                <div className="home-header-inner"></div>
            </React.Fragment>

        );
    }
}

export default HomeHeader;