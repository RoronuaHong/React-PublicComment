import React from "react";
import { Link } from "react-router-dom";

class Home extends React.Component {
    render() {
        return (
            <React.Fragment>
                <p>Home</p>
                <Link to="/list">to list</Link>
            </React.Fragment>
        );
    }
}

export default Home;