import React, { PureComponent } from "react";

import "./style";

class CurrentCity extends PureComponent {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        return (
            <div className="current-city">
                { this.props.cityName }
            </div>
        );
    }
}

export default CurrentCity;