import React, { Component } from "react";
import withCounter from "./withCounter";

class HoverCounter extends Component {
    render() {
        const { count, incrementCount, action } = this.props
        return (
            <h3>
                <span onMouseOver={incrementCount}>{action} {count} times</span>
            </h3>
        )
    }
}

export default withCounter(HoverCounter)