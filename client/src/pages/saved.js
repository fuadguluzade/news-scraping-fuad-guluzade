import React, { Component } from 'react';
import API from './../utils/API';
import SavedData from '../components/SavedData';
import Modal from '../components/Modal';

class Saved extends Component {
    state = {
        savedData: [],
        comment: '',
        show: false,
        newsId: ''
    }

    getNews = () => {
        API.getSavedNews()
            .then(response => {
                this.setState({ savedData: response.data })
            })
            .catch(e => console.log(e));
    }

    componentDidMount = () => {
        this.getNews();
    }

    handleDelete = newsId => {
        API.deleteNews(newsId)
            .then(res => this.getNews())
            .catch(e => console.log(e));
    }

    handleChange = event => {
        this.setState({ comment: event.target.value });
    }

    handleClose = () =>
        this.setState({ show: false });

    setShow = newsId =>
        this.setState({ show: true, newsId: newsId });

    handleSubmitComment = (newsId, comment) => {
        API.postCommentForNews(newsId, comment)
            .then(res => this.handleClose())
            .catch(e => console.log(e))
    }

    handleDeleteAll = () => {
        API.deleteAll()
            .then(res => this.getNews())
            .catch(e => console.log(e));
    }

    render() {
        return (
            <div className='container text-center'>
                <div className='row mb-5'>
                    <div className='col'>
                        <button onClick={this.handleDeleteAll} className="btn btn-danger" type="button">Clear Articles</button>
                    </div>
                </div>
                <div className='row'>
                    <SavedData savedData={this.state.savedData}
                        handleDelete={this.handleDelete}
                        setShow={this.setShow} />
                    <Modal show={this.state.show} newsId={this.state.newsId} handleClose={this.handleClose}
                        handleSubmitComment={this.handleSubmitComment} comment={this.state.comment} handleChange={this.handleChange} />
                </div>
            </div>
        )
    }
}

export default Saved;