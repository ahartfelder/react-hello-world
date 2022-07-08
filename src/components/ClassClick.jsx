import { Component } from "react";

class ClassClick extends Component {
    clickHandler() {
        console.log('Clicked Class')
    }
    render() {
        return (
            <div>
                <button onClick={this.clickHandler}>Click Class</button>
            </div>
        )
    }
}

export default ClassClick