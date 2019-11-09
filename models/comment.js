const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let CommentSchema = new Schema({
    body: {
        type: String,
    }
});

var Comment = mongoose.model('Comment', CommentSchema);

    module.exports = Comment;

