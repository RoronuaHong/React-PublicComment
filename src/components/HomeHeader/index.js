import React, { PureComponent } from "react";

import "./style";

class HomeHeader extends PureComponent {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        return (
            <div className="home-header clearfix">
                <div className="header-city float-left">
                    { this.props.cityName }
                    &nbsp;
                    <i className="icon-angle-down"></i>
                </div>
                <div className="header-user-center float-right">
                    <i className="icon-user"></i>
                </div>
                <div className="header-search">
                    <div className="search-container">
                        <i className="icon-search"></i>
                        <input type="text" placeholder="请输入关键字"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomeHeader;