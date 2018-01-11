import React, { PureComponent } from "react";
import Star from "../Star";

import "./style";

class DetailInfo extends PureComponent {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        const data = this.props.data;

        return (
            <div id="detail-info-container">
                <div className="info-container clearfix">
                    <div className="info-img-container float-left">
                        <img src={ data.img } />
                    </div>
                    <div className="info-content">
                        <h1>{ data.title }</h1>
                        <div className="star-container">
                            <Star star={ data.star } />
                        </div>
                        <span className="price">
                                { data.price }
                            </span>
                        <p className="sub-title">
                            { data.subTitle }
                        </p>
                    </div>
                </div>
                <p dangerouslySetInnerHTML={{ __html: data.desc }}></p>
            </div>
        );
    }
}

export default DetailInfo;