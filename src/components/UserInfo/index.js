import React, { PureComponent } from "react";

import "./style";

class UserInfo extends PureComponent {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        return (
            <div className="userinfo-container">
                <p>
                    <i className="icon-user"></i>
                    { this.props.userinfo.username }
                </p>
                <p>
                    <i className="icon-map-marker"></i>
                    { this.props.userinfo.cityName }
                </p>
            </div>
        );
    }
}

export default UserInfo;