import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as userinfoActions from "../../actions/userinfo";

import A from "../../components/A";
import B from "../../components/B";
import C from "../../components/C";

class Hello extends React.PureComponent {
    constructor() {
        super();

        this.state = {
            news: ""
        }

        this.HandleBindInput = this.HandleBindInput.bind(this);
    }
    componentDidMount() {

        //模拟登录
        this.props.userinfoActions.login({
            userid: "123123",
            city: "XiaMen"
        });
    }

    //实现input的双向绑定
    HandleBindInput(e) {
        this.setState({
            news: e.target.value
        });
    }

    render() {
        return (
            <React.Fragment>
                <A userinfo={ this.props.userinfo } />
                <hr/>
                <B userinfo={ this.props.userinfo } />
                <hr/>
                <C actions={ this.props.userinfoActions } />
                <hr/>
                <input
                    type="text"
                    onChange={ e => this.setState({ news: e.target.value }) }
                />
                <p>{ this.state.news }</p>
            </React.Fragment>
        );
    }
}

function mapStateToProps(state) {
    return {
        userinfo: state.userinfo
    }
}

function mapDispatchToProps(dispatch) {
    return {
        userinfoActions: bindActionCreators(userinfoActions, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Hello);

