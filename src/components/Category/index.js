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
                    name: "美食",
                    links: "/search/scenery",
                    url: "https://gss0.bdstatic.com/8r1VaTipBBZU8tG8nYGOKT67gB5-reHg-_/static/img/0aa7455e3d96966d941a01c908e73155.png"
                },
                {
                    name: "电影演出",
                    links: "/search/movie",
                    url: "https://gss0.bdstatic.com/8r1VaTipBBZU8tG8nYGOKT67gB5-reHg-_/static/img/ad2699b97eaa1b73f27f982f7ceec7b1.png"
                },
                {
                    name: "酒店",
                    links: "/search/hotel",
                    url: "//gss0.bdstatic.com/8r1VaTipBBZU8tG8nYGOKT67gB5-reHg-_/static/img/283ba5e2e49b7f182103d48c1c7c4c42.png"
                },
                {
                    name: "KTV",
                    links: "/search/shopping",
                    url: "//gss0.bdstatic.com/8r1VaTipBBZU8tG8nYGOKT67gB5-reHg-_/static/img/978422296bfe7b7b3e1cb18c1c3403bf.png"
                },
                {
                    name: "外卖",
                    links: "/search/scenery",
                    url: "//gss0.bdstatic.com/8r1VaTipBBZU8tG8nYGOKT67gB5-reHg-_/static/img/c441b207343c25e729c6386051d6c232.png"
                },
                {
                    name: "休闲娱乐",
                    links: "/search/leisure",
                    url: "//gss0.bdstatic.com/8r1VaTipBBZU8tG8nYGOKT67gB5-reHg-_/static/img/af9deaf8d8fe3cba8b2b0dfacb81ded4.png"
                },
                {
                    name: "火车票",
                    links: "/search/trainticket",
                    url: "//gss0.bdstatic.com/8r1VaTipBBZU8tG8nYGOKT67gB5-reHg-_/static/img/94249feea3aa4b2d67bed120724473dd.png"
                },
                {
                    name: "充值中心",
                    links: "/search/voncher",
                    url: "//gss0.bdstatic.com/8r1VaTipBBZU8tG8nYGOKT67gB5-reHg-_/static/img/b55fced5b59938d071a7b0795a5e7b5e.png"
                },
                {
                    name: "周边游",
                    links: "/search/touraround",
                    url: "//gss0.bdstatic.com/8r1VaTipBBZU8tG8nYGOKT67gB5-reHg-_/static/img/f8a06dbfdb923211010d7df853dd2083.png"
                },
                {
                    name: "代金券",
                    links: "/search/coupon",
                    url: "//gss0.bdstatic.com/8r1VaTipBBZU8tG8nYGOKT67gB5-reHg-_/static/img/af4aec7a01304cdaaf1d42b4fb044721.png"
                }
            ],
            [
                {
                    name: "美食",
                    links: "/search/scenery",
                    url: "https://gss0.bdstatic.com/8r1VaTipBBZU8tG8nYGOKT67gB5-reHg-_/static/img/0aa7455e3d96966d941a01c908e73155.png"
                },
                {
                    name: "酒店",
                    links: "/search/hotel",
                    url: "//gss0.bdstatic.com/8r1VaTipBBZU8tG8nYGOKT67gB5-reHg-_/static/img/283ba5e2e49b7f182103d48c1c7c4c42.png"
                },
                {
                    name: "KTV",
                    links: "/search/shopping",
                    url: "//gss0.bdstatic.com/8r1VaTipBBZU8tG8nYGOKT67gB5-reHg-_/static/img/978422296bfe7b7b3e1cb18c1c3403bf.png"
                },
                {
                    name: "外卖",
                    links: "/search/scenery",
                    url: "//gss0.bdstatic.com/8r1VaTipBBZU8tG8nYGOKT67gB5-reHg-_/static/img/c441b207343c25e729c6386051d6c232.png"
                },
                {
                    name: "休闲娱乐",
                    links: "/search/leisure",
                    url: "//gss0.bdstatic.com/8r1VaTipBBZU8tG8nYGOKT67gB5-reHg-_/static/img/af9deaf8d8fe3cba8b2b0dfacb81ded4.png"
                },
                {
                    name: "电影演出",
                    links: "/search/movie",
                    url: "https://gss0.bdstatic.com/8r1VaTipBBZU8tG8nYGOKT67gB5-reHg-_/static/img/ad2699b97eaa1b73f27f982f7ceec7b1.png"
                },
                {
                    name: "火车票",
                    links: "/search/trainticket",
                    url: "//gss0.bdstatic.com/8r1VaTipBBZU8tG8nYGOKT67gB5-reHg-_/static/img/94249feea3aa4b2d67bed120724473dd.png"
                },
                {
                    name: "充值中心",
                    links: "/search/voncher",
                    url: "//gss0.bdstatic.com/8r1VaTipBBZU8tG8nYGOKT67gB5-reHg-_/static/img/b55fced5b59938d071a7b0795a5e7b5e.png"
                },
                {
                    name: "周边游",
                    links: "/search/touraround",
                    url: "//gss0.bdstatic.com/8r1VaTipBBZU8tG8nYGOKT67gB5-reHg-_/static/img/f8a06dbfdb923211010d7df853dd2083.png"
                },
                {
                    name: "代金券",
                    links: "/search/coupon",
                    url: "//gss0.bdstatic.com/8r1VaTipBBZU8tG8nYGOKT67gB5-reHg-_/static/img/af4aec7a01304cdaaf1d42b4fb044721.png"
                }
            ],
            [
                {
                    name: "充值中心",
                    links: "/search/voncher",
                    url: "//gss0.bdstatic.com/8r1VaTipBBZU8tG8nYGOKT67gB5-reHg-_/static/img/b55fced5b59938d071a7b0795a5e7b5e.png"
                },
                {
                    name: "周边游",
                    links: "/search/touraround",
                    url: "//gss0.bdstatic.com/8r1VaTipBBZU8tG8nYGOKT67gB5-reHg-_/static/img/f8a06dbfdb923211010d7df853dd2083.png"
                },
                {
                    name: "代金券",
                    links: "/search/coupon",
                    url: "//gss0.bdstatic.com/8r1VaTipBBZU8tG8nYGOKT67gB5-reHg-_/static/img/af4aec7a01304cdaaf1d42b4fb044721.png"
                },
                {
                    name: "美食",
                    links: "/search/scenery",
                    url: "https://gss0.bdstatic.com/8r1VaTipBBZU8tG8nYGOKT67gB5-reHg-_/static/img/0aa7455e3d96966d941a01c908e73155.png"
                },
                {
                    name: "电影演出",
                    links: "/search/movie",
                    url: "https://gss0.bdstatic.com/8r1VaTipBBZU8tG8nYGOKT67gB5-reHg-_/static/img/ad2699b97eaa1b73f27f982f7ceec7b1.png"
                },
                {
                    name: "酒店",
                    links: "/search/hotel",
                    url: "//gss0.bdstatic.com/8r1VaTipBBZU8tG8nYGOKT67gB5-reHg-_/static/img/283ba5e2e49b7f182103d48c1c7c4c42.png"
                },
                {
                    name: "KTV",
                    links: "/search/shopping",
                    url: "//gss0.bdstatic.com/8r1VaTipBBZU8tG8nYGOKT67gB5-reHg-_/static/img/978422296bfe7b7b3e1cb18c1c3403bf.png"
                },
                {
                    name: "外卖",
                    links: "/search/scenery",
                    url: "//gss0.bdstatic.com/8r1VaTipBBZU8tG8nYGOKT67gB5-reHg-_/static/img/c441b207343c25e729c6386051d6c232.png"
                },
                {
                    name: "休闲娱乐",
                    links: "/search/leisure",
                    url: "//gss0.bdstatic.com/8r1VaTipBBZU8tG8nYGOKT67gB5-reHg-_/static/img/af9deaf8d8fe3cba8b2b0dfacb81ded4.png"
                },
                {
                    name: "火车票",
                    links: "/search/trainticket",
                    url: "//gss0.bdstatic.com/8r1VaTipBBZU8tG8nYGOKT67gB5-reHg-_/static/img/94249feea3aa4b2d67bed120724473dd.png"
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
                <React.Fragment>
                    <ul className="index-container">
                        {
                            imgArr.map((item, index) => {
                                return (
                                    <li key={ index } className={ this.state.indexs === index ? "selected" : "" }></li>
                                )
                            })
                        }
                    </ul>
                </React.Fragment>
            </div>
        );
    }
}

export default Category;