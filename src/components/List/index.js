import React, { PureComponent } from "react";
import Item from "./Item";

import "./style";

class List extends PureComponent {
    constructor(props, context) {
        super(props, context);

        this.clickHandle = this.clickHandle.bind(this);
    }

    clickHandle(id) {
        this.props.deleteFn(id);
    }

    render() {
        const data = this.props.data;
        return (
            <div className="list-container">
                {
                    data.map((item, index) => {
                        return (
                            <Item key={ index } data={ item }/>
                        )
                    })
                }
            </div>
        );
    }
}

export default List;