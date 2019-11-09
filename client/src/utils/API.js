import axios from 'axios';

export default {
    scrapeNews: function() {
        return axios.get("https://cors-anywhere.herokuapp.com/https://www.nytimes.com");
    },

    getSavedNews: function() {
        return axios.get('/saved');
    },

    saveNews: function(news) {
        return axios.post('/saved', news);
    },

    deleteNews: function(id) {
        return axios.delete('/saved/' + id);
      },

    getCommentsForNews: function(id) {
        return axios.get('/comments/' + id);
    },

    postCommentForNews: function(id, comment) {
        return axios.post(`/comments/${id}`, {comment: comment});
    },

    deleteComment: function(id) {
        return axios.delete(`/comments/${id}`);
    },

    deleteAll: function() {
        return axios.delete('/delete_all');
    }
}