const Post = require('../models/postModel');

const createPost = async (req, res, next) => {
    const newPost = new Post({...req.body});
    console.log(newPost);
    await newPost.save();
    res.json({
        message: "New post has been created",
        Post: newPost
    });
};

const getAllPosts = async (req, res, next) => {
    // let filter = {
    //     ...req.query
    // }
    const posts = await Post.find();
    res.json({
        message: posts.length ? "Posts have been founded" : "There are no posts exist",
        Post: posts
    });
};

const getSinglePost = async (req, res, next) => {
    const id = req.params.id;
    const selectedPost = await Post.findOne({_id: id});
    res.json({
        message: selectedPost ? "Post has been founded" : "Post was not found",
        Post: selectedPost
    });
};

const updatePost = async (req, res, next) => {
    const id = req.params.id;
    const updatedPost = await Post.findOneAndUpdate({ _id: id }, req.body, { new: true });
    res.json({
        message: updatedPost ? "Post has been updated" : "Post was not found",
        Post: updatedPost
    });
}

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