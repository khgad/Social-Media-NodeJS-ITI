const express = require('express');
const router = express.Router({mergeParams: true});
const commentController = require('../controllers/commentController');

// get all comments
router.get('/', commentController.getAllComments);

// get single comment
router.get('/:commentId', commentController.getSingleComment);

// create new comment
router.post('/', commentController.createComment);

// update comment
router.patch('/:commentId', commentController.updateComment);

// delete comment
router.delete('/:commentId', commentController.deleteComment);

module.exports = router;