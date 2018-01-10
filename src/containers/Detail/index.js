import React from "react";

class Detail extends React.Component {
    render() {
        return (
            <p>Detail, url参数: { this.props.match.params.id }</p>
        );
    }
}

export default Detail;