import React from "react";

class B extends React.PureComponent {
    render() {
        return (
            <React.Fragment>
                <p>{ this.props.userinfo.city }</p>
            </React.Fragment>
        );
    }
}

export default B;