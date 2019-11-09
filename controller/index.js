const db = require('../models');

module.exports = {
    getSaved: function (req, res) {
        db.News
            .find(req.query)
            .then(dbModel => res.json(dbModel))
            .catch(e => res.status(422).json(e))
    },

    save: function (req, res) {
        db.News
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(e => res.status(422).json(e))
    },

    deleteNews: function (req, res) {
        db.News
            .findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    getComments: function (req, res) {
        db.News
            .findById({ _id: req.params.id })
            .populate('comment')
            .then(dbmodel => res.json(dbmodel))
            .catch(e => res.status(422).json(e))
    },

    postComment: function (req, res) {
        db.Comments.create({ body: req.body.comment })
            .then(function (dbComment) {
                db.News.findOneAndUpdate({ _id: req.params.id }, { $push: { comment: dbComment._id } }, { new: true })
                    .then(function (dbNews) {
                        res.json(dbNews)
                    })
                    .catch(e => res.status(422).json(e))
            })
            .catch(e => res.status(422).json(e))
    },

    deleteComment: async function (req, res) {
        try {
            console.log('req.params.id ' + JSON.stringify(req.params))
        } catch (e) {
            res.status(422).json(e);
        }
    },

    deleteAll: async function (req, res) {
        await db.News.deleteMany({}, function(err, response) {
            if (err) throw(err);
            res.json(response);
        })
        await db.Comments.deleteMany({}, function(err, response) {
            if (err) throw(err);
            res.json(response);
        })
    }
}