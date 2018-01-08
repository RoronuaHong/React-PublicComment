import React from "react";

class List extends React.Component {
    constructor(props) {
        super(props);

        this.clickHandler = this.clickHandler.bind(this);
    }

    clickHandler(value) {
        this.props.history.push("/detail/" + value);
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