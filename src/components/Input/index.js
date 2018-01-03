import React from "react";
import { render } from "react-dom";

class Input extends React.PureComponent {
    constructor(props, context) {
        super(props, context);

        this.state = {
            value: ""
        }

        this.changeHandle = this.changeHandle.bind(this);
        this.keyUpHandle = this.keyUpHandle.bind(this);
    }

    changeHandle(e) {
        this.setState({
            value: e.target.value
        });
    }

    keyUpHandle(e) {
        const value = this.state.value;

        if(e.keyCode === 13 && value.trim()) {
            this.props.submitFn(value);

            this.setState({
                value: ""
            });
        }
    }

    render() {
        return (
            <input
                style={{ width: "100%", height: "40px", lineHeight: "30px", border: "1px solid #f93" }}
                value={ this.state.value }
                onChange={ this.changeHandle }
                onKeyUp={ this.keyUpHandle }
            />
        )
    }
}

export default Input;