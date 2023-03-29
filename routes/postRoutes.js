const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');
const authControler= require("./../controllers/authControler");
const auth = require("./../middlewares/auth");

// only logged in users are allowed to access post routes
router.use('/', authControler.verifyToken);

// get all posts
router.get('/', postController.getAllPosts);

// get single post
router.get('/:id', postController.getSinglePost);

// create new post
router.post('/', postController.createPost); // *** add user id to post ****

// update post
router.patch('/:id', auth.authorizeUpdateAndDelete, postController.updatePost); // *** only author are able to update the post ****

// delete post
router.delete('/:id', auth.authorizeUpdateAndDelete, postController.deletePost); // *** only author are able to delete the post ****

module.exports = router;