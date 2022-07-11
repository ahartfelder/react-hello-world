import { Component } from "react";

export default class RegComp extends Component {
    render() {
        console.log('Regular Component')
        return (
            <div>
                RegComp {this.props.name}
            </div>
        )
    }
}