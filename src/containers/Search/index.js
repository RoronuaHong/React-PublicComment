import React, { PureComponent } from "react";

import SearchHeader from "../../components/SearchHeader";
import SearchList from "./subpages/List";

class Search extends PureComponent {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        const params = this.props.match.params;

        return (
            <React.Fragment>
                <SearchHeader keyword={ params.keyword } history={ this.props.history } />
                <SearchList keyword={ params.keyword } category={ params.category } />
            </React.Fragment>
        );
    }
}

export default Search;