import React from "react";

class C extends React.PureComponent {
    constructor() {
        super();

        this.changeDate = this.changeDate.bind(this);
    }

    //修改数据
    changeDate() {
        this.props.actions.login({
            userid: "333",
            city: "ShangHai"
        });
    }

    render() {
        return (
            <React.Fragment>
                <button onClick={ this.changeDate }>修改</button>
            </React.Fragment>
        );
    }
}

export default C;