import { Component } from "react";

export default class UserGreeting extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoggedIn: true
        }
    }

    render() {
        /* if(this.state.isLoggedIn) {
            return <div>Welcome Andreas</div>
        } else {
            return <div>Welcome Guest</div>
        } */
        /* let msg
        if(this.state.isLoggedIn) {
            msg = <div>Welcome Andreas</div>
        } else {
            msg = <div>Welcome Guest</div>
        }
        return <div>{msg}</div> */
        // return this.state.isLoggedIn ? <div>Welcome Andreas</div> : <div>Welcome Guest</div>
        return this.state.isLoggedIn && <div>Welcome Andreas</div>
    }
}