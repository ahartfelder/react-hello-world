import React, { Component } from "react";

class CounterTwo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }

    incrementCount = () => {
        this.setState(state => {
            return {
                count: state.count + 1
            }
        })
    }
    
    render() {
        return this.props.children(this.state.count, this.incrementCount)
    }
}

export default CounterTwo