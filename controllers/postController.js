const Post = require('../models/postModel');


/* ----------------------------------------------------
@desc       create new post
@route      /posts
@method     POST
@access     protected (only logged in users)
---------------------------------------------------- */

const createPost = async (req, res, next) => {
    const author = req.user.id
    const newPost = new Post({ ...req.body , author});
    await newPost.save();
    res.json({
        message: "New post has been created",
        Post: newPost
    });
};

/* ----------------------------------------------------
@desc       Get all posts
@route      /posts
@method     GET
@access     protected (only logged in users)
---------------------------------------------------- */

const getAllPosts = async (req, res, next) => {
    const posts = await Post.find();
    res.json({
        message: posts.length ? "Posts have been founded" : "There are no posts exist",
        Post: posts
    });
};


/* ----------------------------------------------------
@desc       Get single post by id
@route      /posts/:id
@method     GET
@access     protected (only logged in users)
---------------------------------------------------- */

const getSinglePost = async (req, res, next) => {
    const id = req.params.id;
    const selectedPost = await Post.findOne({ _id: id });
    res.json({
        message: selectedPost ? "Post has been founded" : "Post was not found",
        Post: selectedPost
    });
};


/* ----------------------------------------------------
@desc       updata post
@route      /posts/:id
@method     PATCH
@access     protected (only logged in user and owner of the post)
---------------------------------------------------- */

const updatePost = async (req, res, next) => {
    const id = req.params.id;
    const updatedPost = await Post.findOneAndUpdate({ _id: id }, req.body, { new: true });
    res.json({
        message: updatedPost ? "Post has been updated" : "Post was not found",
        Post: updatedPost
    });
}


/* ----------------------------------------------------
@desc       delete post
@route      /posts/:id
@method     DELETE
@access     protected (only logged in user and owner of the post)
---------------------------------------------------- */

const deletePost = async (req, res, next) => {
    const id = req.params.id;
    const deletedPost = await Post.findOneAndDelete({ _id: id });
    res.json({
        message: deletedPost ? "Post has been deleted" : "Post was not found",
        Post: deletedPost
    });
}

module.exports = {
    createPost,
    getAllPosts,
    getSinglePost,
    updatePost,
    deletePost
}