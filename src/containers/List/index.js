import React from "react";
import { bowserHistory } from "react-router";

class List extends React.Component {
    constructor() {
        super();

        this.clickHandler = this.clickHandler.bind(this);
    }

    clickHandler(value) {
        bowserHistory.push("/detail/" + value);
    }

    render() {
        const arr = [1, 2, 3];
        return (
            <ul>
                {
                    arr.map((item, index) => {
                        return (
                            <li key={ index } onClick={ () => { this.clickHandler(item) } }>
                                js jump to { item }
                            </li>
                        )
                    })
                }
            </ul>
        );
    }
}

export default List;