const Comment = require('../models/commentModel');

const createComment = async (req, res, next) => {
    const post_id = req.params.postId;
    const newComment = new Comment({...req.body, post_id});
    await newComment.save();
    res.json({
        message: "New Comment has been created",
        Comment: newComment
    });
};

const getAllComments = async (req, res, next) => {
    let filter = {
        post_id: req.params.postId
    };
    const comments = await Comment.find(filter);
    res.json({
        message: comments.length ? "Comments have been founded" : "There are no comments exist",
        Comments: comments
    });
};

const getSingleComment = async (req, res, next) => {
    let filter = {
        post_id: req.params.postId,
        _id: req.params.commentId
    };
    const selectedComment = await Comment.findOne(filter);
    res.json({
        message: selectedComment ? "Comment has been founded" : "Comment was not found",
        Comment: selectedComment
    });
};

const updateComment = async (req, res, next) => {
    let filter = {
        post_id: req.params.postId,
        _id: req.params.commentId
    };
    const updatedComment = await Comment.findOneAndUpdate(filter, req.body, { new: true });
    res.json({
        message: updatedComment ? "Comment has been updated" : "Comment was not found",
        Comment: updatedComment
    });
}

const deleteComment = async (req, res, next) => {
    let filter = {
        post_id: req.params.postId,
        _id: req.params.commentId
    };
    const deletedComment = await Comment.findOneAndDelete(filter);
    res.json({
        message: deletedComment ? "Comment has been deleted" : "Comment was not found",
        Comment: deletedComment
    });
}

module.exports = {
    createComment,
    getAllComments,
    getSingleComment,
    updateComment,
    deleteComment
}