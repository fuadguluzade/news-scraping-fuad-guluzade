const router = require('express').Router();
const controller = require('../controller');

router.route('/saved')
    .get(controller.getSaved)
    .post(controller.save);


router.route('/saved/:id')
    .delete(controller.deleteNews);

router.route('/comments/:id')
    .get(controller.getComments)
    .post(controller.postComment)
// .delete(controller.deleteComment)


module.exports = router;
