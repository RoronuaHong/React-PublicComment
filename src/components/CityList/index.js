import React, { PureComponent } from "react";

import "./style";

class CityList extends PureComponent {
    constructor(props, context) {
        super(props, context);

        this.state = {
            cityName: [
                {
                    name: "北京"
                },
                {
                    name: "上海"
                },
                {
                    name: "深圳"
                },
                {
                    name: "广州"
                },
                {
                    name: "厦门"
                },
                {
                    name: "杭州"
                },
                {
                    name: "重庆"
                },
                {
                    name: "福州"
                },
                {
                    name: "苏州"
                },
                {
                    name: "贵州"
                },
                {
                    name: "南京"
                },
                {
                    name: "内蒙古"
                },
            ]
        }
        this.clickHandle = this.clickHandle.bind(this);
    }

    clickHandle(newCity) {
        this.props.changeCityFn(newCity);
    }

    render() {
        const cityList = this.state.cityName;

        return (
            <div className="city-list-container">
                <h3>城市列表</h3>
                <ul className="clearfix">
                    {
                        cityList.map((item, index) => {
                            return (
                                <li key={ index }>
                                    <span onClick={ () => { this.clickHandle(item.name) }}>{ item.name }</span>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default CityList;