import React, { Component } from 'react';
import { Button } from 'reactstrap';
export default class CommentForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            author: "",
            message: ""
        }
        this.handleAuthorChange = this.handleAuthorChange.bind(this);
        this.handleMessageChange = this.handleMessageChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleAuthorChange(event) {
        this.setState({ author: event.target.value });
    }
    handleMessageChange(event) {
        this.setState({ message: event.target.value });
    }
    handleSubmit(event) {
        if (this.state.author && this.state.message) {
            this.props.postComment({ author: this.state.author, message: this.state.message })

            this.setState({ author: "", message: "" })
            event.preventDefault();
        }
    }
    render() {
        return (
            <form class="" onSubmit={this.handleSubmit}>
                <label htmlFor="">Your Name</label>
                <input type="text" name="author" value={this.state.author} onChange={this.handleAuthorChange} />
                <br /> <br />
                <textarea name="message" rows="8" cols="80" onChange={this.handleMessageChange} value={this.state.message}>
                </textarea>
                <br />
                < Button color="primary" type="submit">Kirim</Button>{' '}
            </form>
        )
    }
}


