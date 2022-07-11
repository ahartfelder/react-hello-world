import React, { Component } from "react";
import { UserConsumer } from "../userContext";

class ComponentF extends Component {
    render() {
        return (
            <UserConsumer>
                { username => <h2>Welcome {username}</h2> }
            </UserConsumer>
        )
    }
}

export default ComponentF