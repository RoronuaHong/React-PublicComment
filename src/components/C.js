import React from "react";

class C extends React.PureComponent {

    //修改
    changeUserInfo() {
        const actions = this.props.actions;
        actions.login({
            userid: "321",
            city: "XiaMen",
            age: 27
        })
    }

    render() {
        return (
            <div>
                <button onClick={ this.changeUserInfo.bind(this) }>修改</button>
            </div>
        );
    }
}

export default C;