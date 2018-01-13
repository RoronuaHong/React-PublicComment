import React, { PureComponent } from "react";
import { getOrderListData, postComment } from "../../../fetch/user/orderlist";
import OrderListCompnent from "../../../components/OrderList";

import "./style";

class OrderList extends PureComponent {
    constructor(props, context) {
        super(props, context);

        this.state = {
            data: []
        }

        this.loadOrdeList = this.loadOrdeList.bind(this);
        this.submitComment = this.submitComment.bind(this);
    }

    componentDidMount() {
        //获取订单信息
        const username = this.props.userinfo.username;

        if(username) {
            this.loadOrdeList(username);
        } else {
            // this.props.history.push("/login");
        }
    }

    loadOrdeList(username) {
        const result = getOrderListData(username);

        result.then(res => {
            return res.json();
        }).then(data => {
            this.setState({
                data
            });
        });
    }

    //提交评价
    submitComment(id, comment, fn) {
        const result = postComment(id, comment);
        result.then(res => {
            return res.json();
        }).then(data => {
            data.errno === 0 && fn();
        });
    }

    render() {
        return (
            <div className="order-list-container">
                <h2>您的订单</h2>
                {
                    this.state.data.length ?
                        <OrderListCompnent data={ this.state.data } submitComment={ this.submitComment } />
                        :
                        <div>暂无商品</div>
                }
            </div>
        );
    }
}

export default OrderList;