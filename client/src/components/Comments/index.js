import React, { Component } from "react";
import DeleteBtn from './../DeleteBtn'
import './comment.css';
import API from './../../utils/API'


class Comments extends Component {
    state = {
        newsComments: []
    }

    componentDidMount() {
        API.getCommentsForNews(this.props.newsId)
            .then(comments => this.setState({ newsComments: comments.data.comment }))
            .catch(e => console.log(e));
    }

    handleCommentDelete = () => {
        console.log('deleted');
    }

    render() {
        if (this.state.newsComments.length > 0) {
            return (
                this.state.newsComments.map((comment, i) => {
                    return (
                        <div key={i} className="comment">
                            <p>{comment.body}</p>
                            <DeleteBtn onClick={this.handleCommentDelete} />
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

