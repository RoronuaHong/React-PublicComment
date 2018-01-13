import React, { PureComponent } from "react";

import "./style";

class BuyAndStore extends PureComponent {
    constructor(props, context) {
        super(props, context);

        this.storeClickHandle = this.storeClickHandle.bind(this);
        this.buyClickHandle = this.buyClickHandle.bind(this);
    }

    storeClickHandle() {
        this.props.storeHandle();
    }

    buyClickHandle() {
        this.props.buyHandle();
    }

    render() {
        return (
            <div className="buy-store-container clearfix">
                <div className="item-container float-left">
                    {
                        this.props.isStore ?
                            <button className="selected" onClick={ this.storeClickHandle }>已收藏</button>
                            :
                            <button onClick={ this.storeClickHandle }>收藏</button>
                    }
                </div>
                <div className="item-container float-right">
                    {
                        <button onClick={ this.buyClickHandle }>购买</button>
                    }
                </div>
            </div>
        );
    }
}

export default BuyAndStore;