const Review = require('../models/reviewModel');

const createReview = async (req, res, next) => {
    const post = req.params.postId;
    const author = req.user.id;
    const newReview = new Review({...req.body, post, author});
    await newReview.save();
    res.json({
        message: "New Review has been created",
        Review: newReview
    });
};

const getAllReviews = async (req, res, next) => {
    let filter = {
        // user_id: req.user._id,
        post: req.params.postId,
    };
    const reviews = await Review.find(filter)//.populate('Comment').populate('Review');
    res.json({
        message: reviews.length ? "Reviews have been founded" : "There are no reviews exist",
        Reviews: reviews
    });
};

const getSingleReview = async (req, res, next) => {
    let filter = {
        // user_id: req.user._id,
        post: req.params.postId,
        _id: req.params.reviewId
    };
    const selectedReview = await Review.findOne(filter);
    res.json({
        message: selectedReview ? "Review has been founded" : "Review was not found",
        Review: selectedReview
    });
};

const updateReview = async (req, res, next) => {
    let filter = {
        // user_id: req.user._id,
        post: req.params.postId,
        _id: req.params.reviewId
    };
    const updatedReview = await Review.findOneAndUpdate(filter, req.body, { new: true });
    res.json({
        message: updatedReview ? "Review has been updated" : "Review was not found",
        Review: updatedReview
    });
}

const deleteReview = async (req, res, next) => {
    let filter = {
        // user_id: req.user._id,
        post: req.params.postId,
        _id: req.params.reviewId
    };
    const deletedReview = await Review.findOneAndDelete(filter);
    res.json({
        message: deletedReview ? "Review has been deleted" : "Review was not found",
        Review: deletedReview
    });
}

module.exports = {
    createReview,
    getAllReviews,
    getSingleReview,
    updateReview,
    deleteReview
}