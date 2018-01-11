import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import Lists from "../../../components/List";
import LoadMore from "../../../components/LoadMore";

import { getSearchData } from "../../../fetch/search/search";

//初始化数据
const initialState = {
    data: [],
    hasMore: false,
    isLoadingMore: false,
    page: 0
}

class SearchList extends PureComponent {
    constructor(props, context) {
        super(props, context);

        this.state = initialState;

        this.loadPageData = this.loadPageData.bind(this);
    }

    componentDidMount() {
        //获取第一页数据
        this.loadPageData();
    }

    componentDidUpdate() {
        console.log(222);
    }

    //加载数据
    loadPageData() {
        const cityName = this.props.userinfo.cityName,
            category = this.props.category || "",
            keyword = this.props.keyword || "",
            page = this.state.page;

        //记录状态
        this.setState({
            isLoadingMore: true
        });

        const result = getSearchData(cityName, page, category, keyword);

        result.then(res => {
            return res.json();
        }).then(data => {
            this.setState({
                hasMore: data.hasMore,                          //是否拥有下一页
                data: this.state.data.concat(data.data),
                page: page + 1,
                isLoadingMore: false
            });
        }).catch(ex => {
            console.log("搜索页获取数据报错", ex.message);
        });
    }

    render() {
        return (
            <div>
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

function mapStateToProps(state) {
    return {
        userinfo: state.userinfo
    }
}

function mapDispatchToProps() {
    return {

    }
}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchList));
