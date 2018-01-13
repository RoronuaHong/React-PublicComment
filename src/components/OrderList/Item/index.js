import React, { PureComponent } from "react";

import "./style";

class OrderList extends PureComponent {
    constructor(props, context) {
        super(props, context);

        this.state = {
            commentState: 0
        }

        this.showComment = this.showComment.bind(this);
        this.cancelHandler = this.cancelHandler.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
        this.commentOK = this.commentOK.bind(this);
    }

    componentDidMount() {
        this.setState({
            commentState: this.props.data.commentState
        });
    }

    showComment() {
        this.setState({
            commentState: 1
        })
    }

    submitHandler() {
        const textareas = this.refs.textareas.value.trim(),
            submitComment = this.props.submitComment,
            id = this.props.data.id;

        if (!textareas) {
            return;
        }

        submitComment(id, textareas, this.commentOK);
    }

    commentOK() {
        //已经评价，修改状态
        this.setState({
            commentState: 2
        })
    }

    cancelHandler() {
        this.setState({
            commentState: 0
        })
    }

    render() {
        const data = this.props.data;

        return (
            <div className="order-item-container clearfix">
                <div className="order-item-img float-left">
                    <img src={ data.img } />
                </div>
                <div className="order-item-comment float-right">
                    {
                        this.state.commentState === 0 ?
                            //未评价
                            <button className="btn" onClick={ this.showComment }>评价</button>
                            :
                            this.state.commentState === 1 ?
                                //评价中
                                ""
                                :
                                //已评价
                                <button className="btn unselected-btn">已评价</button>
                    }
                </div>
                <div className="order-item-content">
                    <span>
                        商户: { data.title }
                    </span>
                    <span>
                        数量: { data.count }
                    </span>
                    <span>
                        价格: ￥{ data.price }
                    </span>
                </div>
                {
                    this.state.commentState === 1 ?
                        <div className="comment-text-container">
                            <textarea className="comment-text" ref="textareas"></textarea>
                            <div style={{ textAlign: "center" }} >
                                <button className="btn" onClick={ this.submitHandler }>提交</button>
                                &nbsp;
                                <button className="btn unselected-btn" onClick={ this.cancelHandler }>取消</button>
                            </div>
                        </div>
                        :
                        ""
                }
            </div>
        );
    }
}

export default OrderList;