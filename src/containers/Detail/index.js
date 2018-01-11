import React, { PureComponent } from "react";
import Header from "../../components/Header";
import Info from "./subpages/info";
import Comment from "./subpages/comment";

class Detail extends PureComponent {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div>
                <Header title="商户详情"/>
                <Info id={ this.props.match.params.id } />
                <Comment id={ this.props.match.params.id } />
            </div>
        );
    }
}

export default Detail;