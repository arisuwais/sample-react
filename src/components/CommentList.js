import React, { Component } from 'react';
import Comment from './Comment';
export default class CommentList extends Component {
    render() {
        let nodes = this.props.comments.map((item, index) => {
            return (<Comment key={index} author={item.author} message={item.message} onDelete={() => this.props.deleteComment(index)} />)
        })

        return (
            <ul>
                {nodes}
            </ul>
        )
    }
}
