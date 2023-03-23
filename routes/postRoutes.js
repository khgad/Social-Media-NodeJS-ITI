const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');

// get all posts
router.get('/', postController.getAllPosts);

// get single post
router.get('/:id', postController.getSinglePost);

// create new post
router.post('/', postController.createPost);

// update post
router.patch('/:id', postController.updatePost);

// delete post
router.delete('/:id', postController.deletePost);

module.exports = router;