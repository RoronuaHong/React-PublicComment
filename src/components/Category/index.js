import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
import ReactSwipe from "react-swipe";

import "./style";

class Category extends PureComponent {
    constructor(props, context) {
        super(props, context);

        this.state = {
            indexs: 0
        }
    }
    render() {
        const opt = {
            auto: 2000,
            callback: (indexs) => {
                this.setState({
                    indexs
                });
            }
        }

        //获取显示数据
        const imgArr = [
            [
                {
                    name: "景点",
                    links: "/search/scenery",
                    url: "http://images2015.cnblogs.com/blog/138012/201610/138012-20161022224203170-1528315005.png"
                },
                {
                    name: "购物",
                    links: "/search/shopping",
                    url: "http://images2015.cnblogs.com/blog/138012/201610/138012-20161022224150045-30962603.png"
                },
                {
                    name: "景点",
                    links: "/search/scenery",
                    url: "http://images2015.cnblogs.com/blog/138012/201610/138012-20161022224203170-1528315005.png"
                },
                {
                    name: "购物",
                    links: "/search/shopping",
                    url: "http://images2015.cnblogs.com/blog/138012/201610/138012-20161022224150045-30962603.png"
                },
                {
                    name: "景点",
                    links: "/search/scenery",
                    url: "http://images2015.cnblogs.com/blog/138012/201610/138012-20161022224203170-1528315005.png"
                },
                {
                    name: "购物",
                    links: "/search/shopping",
                    url: "http://images2015.cnblogs.com/blog/138012/201610/138012-20161022224150045-30962603.png"
                },
                {
                    name: "景点",
                    links: "/search/scenery",
                    url: "http://images2015.cnblogs.com/blog/138012/201610/138012-20161022224203170-1528315005.png"
                },
                {
                    name: "购物",
                    links: "/search/shopping",
                    url: "http://images2015.cnblogs.com/blog/138012/201610/138012-20161022224150045-30962603.png"
                },
                {
                    name: "景点",
                    links: "/search/scenery",
                    url: "http://images2015.cnblogs.com/blog/138012/201610/138012-20161022224203170-1528315005.png"
                },
                {
                    name: "购物",
                    links: "/search/shopping",
                    url: "http://images2015.cnblogs.com/blog/138012/201610/138012-20161022224150045-30962603.png"
                }
            ],
            [
                {
                    name: "KTV",
                    links: "/search/ktv",
                    url: "http://images2015.cnblogs.com/blog/138012/201610/138012-20161022224309185-1519181081.png"
                },
                {
                    name: "景点",
                    links: "/search/scenery",
                    url: "http://images2015.cnblogs.com/blog/138012/201610/138012-20161022224203170-1528315005.png"
                },
                {
                    name: "购物",
                    links: "/search/shopping",
                    url: "http://images2015.cnblogs.com/blog/138012/201610/138012-20161022224150045-30962603.png"
                },
                {
                    name: "景点",
                    links: "/search/scenery",
                    url: "http://images2015.cnblogs.com/blog/138012/201610/138012-20161022224203170-1528315005.png"
                },
                {
                    name: "购物",
                    links: "/search/shopping",
                    url: "http://images2015.cnblogs.com/blog/138012/201610/138012-20161022224150045-30962603.png"
                },
                {
                    name: "景点",
                    links: "/search/scenery",
                    url: "http://images2015.cnblogs.com/blog/138012/201610/138012-20161022224203170-1528315005.png"
                },
                {
                    name: "购物",
                    links: "/search/shopping",
                    url: "http://images2015.cnblogs.com/blog/138012/201610/138012-20161022224150045-30962603.png"
                },
            ],
            [
                {
                    name: "生活服务",
                    links: "/search/lifeserver",
                    url: "http://images2015.cnblogs.com/blog/138012/201610/138012-20161022224237513-176380794.png"
                },
                {
                    name: "景点",
                    links: "/search/scenery",
                    url: "http://images2015.cnblogs.com/blog/138012/201610/138012-20161022224203170-1528315005.png"
                },
                {
                    name: "购物",
                    links: "/search/shopping",
                    url: "http://images2015.cnblogs.com/blog/138012/201610/138012-20161022224150045-30962603.png"
                },
                {
                    name: "景点",
                    links: "/search/scenery",
                    url: "http://images2015.cnblogs.com/blog/138012/201610/138012-20161022224203170-1528315005.png"
                },
                {
                    name: "购物",
                    links: "/search/shopping",
                    url: "http://images2015.cnblogs.com/blog/138012/201610/138012-20161022224150045-30962603.png"
                },
                {
                    name: "景点",
                    links: "/search/scenery",
                    url: "http://images2015.cnblogs.com/blog/138012/201610/138012-20161022224203170-1528315005.png"
                },
                {
                    name: "购物",
                    links: "/search/shopping",
                    url: "http://images2015.cnblogs.com/blog/138012/201610/138012-20161022224150045-30962603.png"
                },
                {
                    name: "景点",
                    links: "/search/scenery",
                    url: "http://images2015.cnblogs.com/blog/138012/201610/138012-20161022224203170-1528315005.png"
                },
                {
                    name: "购物",
                    links: "/search/shopping",
                    url: "http://images2015.cnblogs.com/blog/138012/201610/138012-20161022224150045-30962603.png"
                }
            ]
        ]

        return (
            <div id="home-category">
                <ReactSwipe className="carousel" swipeOptions={opt}>
                    {
                        imgArr.map((item, index) => {
                            return (
                                <div key={ index } className="carousel-item">
                                    <ul className="clearfix">
                                        {
                                            item.map((items, indexs) => {
                                                return (
                                                    <Link key={ indexs } to={ items.links }>
                                                        <li className="float-left">
                                                            <img src={ items.url } alt=""/>
                                                            { items.name }
                                                        </li>
                                                    </Link>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                            )
                        })
                    }
                </ReactSwipe>
                <div>
                    <ul className="index-container">
                        {
                            imgArr.map((item, index) => {
                                return (
                                    <li key={ index } className={ this.state.indexs === index ? "selected" : "" }></li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        );
    }
}

export default Category;