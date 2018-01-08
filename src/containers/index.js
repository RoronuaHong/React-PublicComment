import React from "react";

class App extends React.PureComponent {
    constructor(props, context) {
        super(props, context);

        this.state = {
            initDone: false
        }
    }

    render() {
        return (
            <React.Fragment>
                <div>{ this.props.children }</div>
            </React.Fragment>
        );
    }
}

export default App;