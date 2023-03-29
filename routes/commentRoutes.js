const express = require('express');
const router = express.Router({mergeParams: true});
const commentController = require('../controllers/commentController');
const authControler= require("./../controllers/authControler");
const auth = require("./../middlewares/auth");
const validation = require('./../middlewares/validation');

router.use(validation.postExisting);

// get all comments
router.get('/', commentController.getAllComments);

// get single comment
router.get('/:commentId', commentController.getSingleComment);

// create new comment
router.post('/', commentController.createComment);

// update comment
router.patch('/:commentId', auth.authorizeUpdateAndDelete, commentController.updateComment);

// delete comment
router.delete('/:commentId', auth.authorizeUpdateAndDelete, commentController.deleteComment);

module.exports = router;