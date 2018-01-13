import React, { PureComponent } from "react";

import Item from "./Item";

class OrderList extends PureComponent {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        const data = this.props.data,
            submitComment = this.props.submitComment;

        return (
            <div>
                {
                    data.map((item, index) => {
                        return <Item key={ index } data={ item } submitComment={ submitComment } />
                    })
                }
            </div>
        );
    }
}

export default OrderList;