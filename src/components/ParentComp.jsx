// import { PureComponent } from "react";
import MemoComp from "./MemoComp";
import { Component } from "react";
// import PureComp from "./PureComp";
// import RegComp from "./RegComp";

export default class ParentComp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'Andreas'
        }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: 'Andreas'
            })
        }, 5000)
    }
    
    render() {
        console.log('Parent Component')
        return (
            <div>
                ParentComp
                <MemoComp name={this.state.name} />
                {/* <RegComp name={this.state.name} />
                <PureComp name={this.state.name} /> */}
            </div>
        )
    }
}