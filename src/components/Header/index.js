import React from "react";

class Header extends React.Component {
    render() {
        return (
            <div>
                <p>{ this.props.title }</p>
                <a href="">{ this.props.aaa.b }</a>
            </div>
        );
    }
}

export default Header;