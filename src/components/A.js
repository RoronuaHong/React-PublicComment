import React from "react";

class A extends React.PureComponent {
    render() {
        return (
            <React.Fragment>
                <p>{ this.props.userinfo.userid }</p>
            </React.Fragment>
        );
    }
}

export default A;