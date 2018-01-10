import React, { PureComponent } from "react";
import { getAdData } from "../../../fetch/home/home";
import HomeAd from "../../../components/HomeAd";

class Ad extends PureComponent {
    constructor(props, context) {
        super(props, context);

        this.state = {
            data: []
        }
    }

    componentDidMount() {
        let result = getAdData();

        result.then(res => {
            return res.json();
        }).then(data => {
            if(data.length) {
                this.setState({
                    data
                })
            }
        });
    }

    render() {
        return (
            <React.Fragment>
                {
                    this.state.data.length ?
                        <HomeAd data={ this.state.data } />
                        :
                        <div>loading...</div>
                }
            </React.Fragment>
        );
    }
}

export default Ad;