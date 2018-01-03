import React from "react";

class A extends React.PureComponent {
    render() {
        return (
            <div>
                <p>{ this.props.userinfo.userid }</p>
                <p>{ this.props.userinfo.age }</p>
            </div>
        );
    }
}

export default A;