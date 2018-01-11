import React, { PureComponent } from "react";

import "./style";

class SearchInput extends PureComponent {
    constructor(props, context) {
        super(props, context);

        this.state = {
            value: this.props.value || ""
        }

        this.changeHandle = this.changeHandle.bind(this);
        this.keyUpHandle = this.keyUpHandle.bind(this);
    }

    changeHandle(e) {
        this.setState({
            value: e.target.value
        })
    }

    keyUpHandle(e) {
        if(e.keyCode !== 13) {
            return;
        }

        this.props.enterHandle(this.state.value);
    }

    render() {
        return (
            <input
                type="text"
                className="search-input"
                placeholder="请输入关键字"
                value={ this.state.value }
                onChange ={ this.changeHandle }
                onKeyUp={ this.keyUpHandle }
            />
        );
    }
}

export default SearchInput;