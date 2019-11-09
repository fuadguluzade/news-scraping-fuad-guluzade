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

    deleteNews: function(req, res) {
        db.News
        .findById({ _id: req.params.id })
        .then(dbModel => dbModel.remove())
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },

    getComments: async function (req, res) {
        await db.News
            .findById({ _id: req.params.id })
            .populate('comment')
            .then(dbmodel => res.json(dbmodel))
            .catch(e => res.status(422).json(e))
    },

    postComment: async function (req, res) {
        await db.Comments.create({body: req.body.comment})
            .then(function(dbComment){
                console.log(dbComment)
                db.News.findOneAndUpdate({_id:req.params.id}, {$push:{comment:dbComment._id}}, {new:true})
                .then(function(dbNews){
                    console.log('dbNews ',dbNews)
                    res.json(dbNews)
                })
                .catch(e => res.status(422).json(e))
            })
            .catch(e => res.status(422).json(e))
    },

    // deleteComment: async function (req, res) {
    //     try {
    //         const news = await db.News.findById(req.params.id);
    //         await db.News.
    //     } catch (e) {
    //         res.status(422).json(e);
    // }
}