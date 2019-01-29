import React from 'react';
import { Button } from 'reactstrap'
const Comment = (props) => {
    return (
        <li>
            <h4>{props.author}</h4>
            <p>{props.message}</p>
            <Button color='danger' type="button" onClick={props.onDelete} > hapus</Button>{' '}
        </li>
    )



}


export default Comment;
