import { Component } from 'react'

class Welcome extends Component {
    render() {
        const { name, surname } = this.props
        return (
            <div>
                <h1>Welcome {name} {surname}</h1>
                {this.props.children}
            </div>
        ) 
    }
}

export default Welcome