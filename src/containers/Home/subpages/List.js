import React, { PureComponent } from "react";
import { getListData } from "../../../fetch/home/home";
import Lists from "../../../components/List";
import LoadMore from "../../../components/LoadMore";

import "./style";

class List extends PureComponent {
    constructor(props, context) {
        super(props, context);

        this.state = {
            data: [],
            hasMore: false,
            isLoadingMore: false,       //是否在加载中
            page: 0,                    //下一页的页码
        }

        this.loadPageData = this.loadPageData.bind(this);
    }

    componentDidMount() {
        //获取第一页数据
        this.loadPageData();
    }

    //加载数据
    loadPageData() {
        const cityName = this.props.cityName,
            page = this.state.page;

        //记录状态
        this.setState({
            isLoadingMore: true
        });

        const result = getListData(cityName, page);

        result.then(res => {
            return res.json();
        }).then(data => {
            this.setState({
                hasMore: data.hasMore,                          //是否拥有下一页
                data: this.state.data.concat(data.data),
                page: page + 1,
                isLoadingMore: false
            });
        });
    }

    render() {
        return (
            <div>
                <h2 className="home-list-title">猜你喜欢</h2>
                {
                    this.state.data.length ?
                        <Lists data={ this.state.data }/>
                        :
                        <div>empty...</div>
                }
                {
                    this.state.hasMore ?
                        <LoadMore isLoadingMore={ this.state.isLoadingMore } loadMoreFn={ this.loadPageData } />
                        :
                        <div>到底了</div>
                }
            </div>
        );
    }
}

export default List;