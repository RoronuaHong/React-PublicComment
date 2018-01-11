import React, { PureComponent } from "react";

import SearchInput from "../SearchInput";

import "./style";

class SearchHeader extends PureComponent {
    constructor(props, context) {
        super(props, context);

        this.clickHandle = this.clickHandle.bind(this);
        this.enterHandle = this.enterHandle.bind(this);
    }

    clickHandle() {
        window.history.back();
    }

    enterHandle(value) {
        this.props.history.push("/search/all/" + encodeURIComponent(value));
    }

    render() {
        return (
            <div id="search-header">
                <span className="back-icon" onClick={ this.clickHandle } >
                    <i className="icon-chevron-left"></i>
                </span>
                <div className="header-search">
                    <div className="search-container">
                        <i className="icon-search"></i>
                        <SearchInput value={ this.props.keyword } enterHandle={ this.enterHandle } />
                    </div>
                </div>
            </div>
        );
    }
}

export default SearchHeader;