import React, { PureComponent } from "react";

import Item from "./Item";

import "./style";

class CommentList extends PureComponent {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        const data = this.props.data;

        return (
           <div className="comment-list">
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

export default CommentList;