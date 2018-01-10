import React, { PureComponent } from "react";
import { Link } from "react-router-dom";

import "./style";

class HomeAd extends PureComponent {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        const data = this.props.data;

        return (
            <div id="home-ad">
                <h2>超值特惠</h2>
                <ul className="ad-container clearfix">
                    {
                        data.map((item, index) => {
                            return (
                                <li className="float-left" key={ index }>
                                    <Link to={ item.link }>
                                        <img src={ item.img } alt=""/>
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default HomeAd;

