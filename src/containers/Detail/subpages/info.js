import React, { PureComponent } from "react";
import { getInfoData } from "../../../fetch/detail/detail";

import DetailInfo from "../../../components/DetailInfo";

class Info extends PureComponent {
    constructor(props, context) {
        super(props, context);

        this.state = {
            info: false
        }
    }

    componentDidMount() {
        const result = getInfoData(this.props.id);

        result.then(res => {
            return res.json();
        }).then(info => {
            this.setState({
                info
            });
        });
    }

    render() {
        return (
            <div>
                {
                    this.state.info ?
                        <DetailInfo data={ this.state.info } />
                        :
                        <p>没有数据</p>
                }
            </div>
        );
    }
}

export default Info;