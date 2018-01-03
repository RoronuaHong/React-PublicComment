import React from "react";

class B extends React.PureComponent {
    render() {
        return (
            <p>{ this.props.userinfo.city }</p>
        );
    }
}

export default B;