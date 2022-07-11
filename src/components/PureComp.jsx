import { PureComponent } from "react";

export default class PureComp extends PureComponent {
    render() {
        console.log('Regular Component')
        return (
            <div>
                PureComp {this.props.name}
            </div>
        )
    }
}