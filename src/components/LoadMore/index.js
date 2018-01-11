import React, { PureComponent } from "react";
import Throttle from "../../util/throttle";

import "./style";

class LoadMore extends PureComponent {
    constructor(props, context) {
        super(props, context);

        this.loadMoreHandle = this.loadMoreHandle.bind(this);
        this.scrollLoad = this.scrollLoad.bind(this);
    }

    componentDidMount() {

        //下拉加载更多
        window.onscroll = Throttle(this.scrollLoad, 500, 500);
    }

    scrollLoad() {
        const wrapper = this.refs.wrapper,
            top = wrapper && wrapper.getBoundingClientRect().top,
            windowHeight = window.screen.height;

        if(this.props.isLoadingMore) {
            return;
        }

        if(top && top <= windowHeight) {
            this.loadMoreHandle();
        }
    }

    //获取加载更多
    loadMoreHandle() {
        this.props.loadMoreFn();
    }

    render() {
        return (
            <div className="load-more" ref="wrapper">
                {
                    this.props.isLoadingMore ?
                        <span>Loading...</span>
                        :
                        <div onClick={ this.loadMoreHandle }>加载更多</div>
                }
            </div>
        );
    }
}

export default LoadMore;