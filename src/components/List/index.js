import React from "react";
import { render } from "react-dom";

class List extends React.PureComponent {
    constructor(props, context) {
        super(props, context);

        this.clickHandle = this.clickHandle.bind(this);
    }

    clickHandle(id) {
        this.props.deleteFn(id);
    }

    render() {
        const data = this.props.todos;

        return (
            <ul style={{ width: "100%", lineHeight: "40px", border: "1px solid #ccc" }}>
                {
                    data.map((item, index) => {
                        return (
                            <li key={index} onClick={ () => this.clickHandle(item.id) }>
                                { item.text }
                            </li>
                        )
                    })
                }
            </ul>
        );
    }
}

export default List;