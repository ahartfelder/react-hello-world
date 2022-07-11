import React, { Component } from "react";
import UserContext from "../userContext";
import ComponentF from "./ComponentF";

class ComponentE extends Component {
    static contextType = UserContext // Limited to one context
    render() {
        return (
            <>
                <h1>Component E - {this.context}</h1>
                <ComponentF />
            </>
        )
    }
}

// ComponentE.contextType = UserContext

export default ComponentE