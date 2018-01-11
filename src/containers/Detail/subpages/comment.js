import React, { PureComponent } from "react";
import { getCommentData } from "../../../fetch/detail/detail";
import CommentList from "../../../components/CommentList";
import LoadMore from "../../../components/LoadMore";

import "./style";

class Info extends PureComponent {
    constructor(props, context) {
        super(props, context);

        this.state = {
            data: [],
            hasMore: false,
            isLoadingMore: false,
            page: 0
        }

        this.loadPageData = this.loadPageData.bind(this);
    }

    componentDidMount() {
        this.loadPageData();
    }

    loadPageData() {
        const result = getCommentData(this.state.page, this.props.id);

        //设置初始状态
        this.setState({
            isLoadingMore: true
        });

        result.then(res => {
            return res.json();
        }).then(data => {
            this.setState({
                data: this.state.data.concat(data.data),
                hasMore: data.hasMore,
                page: this.state.page + 1,
                isLoadingMore: false
            });
        });
    }

    render() {
        const data = this.state.data;

        return (
            <div className="detail-comment-subpage">
                <h2>用户点评</h2>
                {
                    this.state.data.length ?
                        <CommentList data={ data } />
                        :
                        <div>暂无评论</div>
                }
                {
                    this.state.hasMore ?
                        <LoadMore isLoadingMore={ this.state.isLoadingMore } loadMoreFn={ this.loadPageData } />
                        :
                        <div>加载更多</div>
                }
            </div>
        );
    }
}

export default Info;
