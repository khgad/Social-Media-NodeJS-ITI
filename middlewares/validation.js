const Post = require('../models/postModel');
const CustomError = require('../helpers/customError');

const postExisting = async (req, res, next) => {
    const postId = req.params.postId;
    const post = await Post.findById(postId);
    if(!post) {
        throw new CustomError("Post not found", 400);
    }
    next();
}

module.exports = { 
    postExisting
}