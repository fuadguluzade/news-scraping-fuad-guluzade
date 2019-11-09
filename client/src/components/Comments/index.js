import React, { Component } from "react";
import DeleteBtn from './../DeleteBtn'
import './comment.css';
import API from './../../utils/API'


class Comments extends Component {
    state = {
        newsComments: []
    }

    componentDidMount() {
        this.getComments();
    }

    getComments = () => {
        API.getCommentsForNews(this.props.newsId)
            .then(comments => this.setState({ newsComments: comments.data.comment }))
            .catch(e => console.log(e));
    }

    handleCommentDelete = (commentId) => {
        API.deleteComment(commentId)
            .then(res => this.getComments())
            .catch(e => console.log(e));
    }

    render() {
        if (this.state.newsComments.length > 0) {
            return (
                this.state.newsComments.map((comment) => {
                    return (
                        <div key={comment._id} className="comment">
                            <p>{comment.body}</p>
                            <DeleteBtn onClick={() => this.handleCommentDelete(comment._id)} />
                        </div>
                    )
                })

            )
        } else {
            return (
                <div className="comment">
                    <p>No comments yet</p>
                </div>
            )
        }
    }
}

export default Comments;

