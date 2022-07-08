import { Component } from "react";

export default class Form extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            comment: '',
            topic: 'react'
        }
        this.handleName = this.handleName.bind(this)
        this.handleComment = this.handleComment.bind(this)
        this.handleSelect = this.handleSelect.bind(this)
    }

    handleName(e) {
        this.setState({
            name: e.target.value
        })
    }

    handleComment(e) {
        this.setState({
            comment: e.target.value
        })
    }

    handleSelect(e) {
        this.setState({
            topic: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        console.log(`${this.state.name} ${this.state.comment} ${this.state.topic}`)
    }

    render() {
        const { name, comment, topic } = this.state
        return (
            <div>
                <h1>Form</h1>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Name </label>
                        <input type="text" value={name} onChange={this.handleName} />
                    </div>
                    <div>
                        <label>Comment </label>
                        <textarea value={comment} onChange={this.handleComment}></textarea>
                    </div>
                    <div>
                        <label>Topic</label>
                        <select value={topic} onChange={this.handleSelect}>
                            <option value="react">React</option>
                            <option value="angular">Angular</option>
                            <option value="vue">Vue</option>
                        </select>
                    </div>
                    <button type="submit">Send</button>
                </form>
            </div>
        )
    }
}