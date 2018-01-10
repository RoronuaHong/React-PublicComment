import React, { PureComponent } from "react";
import { Link } from "react-router-dom";

import "./style";

class Item extends PureComponent {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        const data = this.props.data;

        return (
            <div className="list-item clearfix">
                <Link to={'/detail/' + data.id}>
                    <div className="item-img-container float-left">
                        <img src={data.img} alt={data.title}/>
                    </div>
                    <div className="item-content">
                        <div className="item-title-container clearfix">
                            <h3 className="float-left">{data.title}</h3>
                            <span className="float-right">{data.distance}</span>
                        </div>
                        <p className="item-sub-title">
                            {data.subTitle}
                        </p>
                        <div className="item-price-container clearfix">
                            <span className="price float-left">￥{data.price}</span>
                            <span className="mumber float-right">已售{data.mumber}</span>
                        </div>
                    </div>
                </Link>
            </div>
        );
    }
}

export default Item;