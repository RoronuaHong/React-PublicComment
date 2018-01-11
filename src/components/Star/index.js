import React, { PureComponent } from "react";

import "./style";

class Star extends PureComponent {
    constructor(props, context) {
        super(props, context);

        this.Rate = this.Rate.bind(this);
    }

    Rate(rate = 0) {
        return "★★★★★☆☆☆☆☆".slice(5 - rate, 10 - rate);
    }

    render() {
        const star = this.Rate(this.props.star);

        return (
            <span className="star-container">{ star }</span>
        );
    }
}

export default Star;