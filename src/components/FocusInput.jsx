import React, { Component } from "react";
import Input from "./Input";

export default class FocusInput extends Component {
    constructor(props) {
        super(props)
        this.componentRef = React.createRef()
    }

    clickHandler = () => {
        this.componentRef.current.focusInput()
        console.log(this.componentRef.current)
    }
    
    render() {
        return (
            <>
                <h1>Focus</h1>
                <Input ref={this.componentRef} />
                <button onClick={this.clickHandler}>Focus Input</button>
            </>
        )
    }
}