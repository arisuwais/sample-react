import React, { Component } from 'react';
export default class Comment extends Component {
    render() {
        return (
            <li>
                <h4>{this.props.author}</h4>
                <p>{this.props.message}</p>
                <button type="button" onClick={this.props.onDelete} > hapus</button>
            </li>
        )
    }
}
