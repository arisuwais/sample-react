import React, { Component } from 'react';
import CommentList from './CommentList';
import CommentForm from './CommentForm';

export default class CommentBox extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [{ author: "masfud difa", message: "berhasil menjadi seorang programer" }]
        }
        this.postComment = this.postComment.bind(this);
        this.deleteComment = this.deleteComment.bind(this);
    }


    postComment(item) {
        this.setState((state, props) => ({
            data: [...state.data, item]
        }));
    }
    deleteComment(index) {
        this.setState((state, props) => ({
            data: state.data.filter((item, i) => i !== index)
        }));
    }



    render() {
        return (
            <div class='container'>
                <div className='App' style={{ padding: "5px", margin: "10px", border: "2px solid blue" }}>
                    <h1> Komentar RUBICAMP</h1>
                    <CommentList comments={this.state.data} deleteComment={this.deleteComment} />
                    <CommentForm postComment={this.postComment} />
                </div>
            </div>
        )
    }
}
