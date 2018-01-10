import React, { PureComponent } from "react";

import "./style";

class Header extends PureComponent {
    constructor(props, context) {
        super(props, context);

        this.clickHandle = this.clickHandle.bind(this);
    }

    clickHandle() {
       window.history.back();
    }

    render() {
        return (
            <div id="common-header">
                <span className="back-icon" onClick={ this.clickHandle }>
                    <i className="icon-chevron-left"></i>
                </span>
                <h1>{ this.props.title }</h1>
            </div>
        );
    }
}

export default Header;