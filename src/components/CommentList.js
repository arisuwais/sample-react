import React from 'react';
import Comment from './Comment';

const CommentList = (props) => {
    let nodes = props.comments.map((item, index) => {
        return (
            <Comment
                key={index}
                author={item.author}
                message={item.message}
                onDelete={() => props.deleteComment(index)} />)
    })

    return (
        <ul>
            {nodes}
        </ul>
    )
}


export default CommentList;