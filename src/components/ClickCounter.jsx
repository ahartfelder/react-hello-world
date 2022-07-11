import React, { Component } from "react";
import withCounter from "./withCounter";

class ClickCounter extends Component {
    render() {
        const { count, incrementCount, action } = this.props
        return (
            <button onClick={incrementCount}>{action} {count} times</button>
        )
    }
}

export default withCounter(ClickCounter)