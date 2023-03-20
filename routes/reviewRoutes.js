const express = require('express');
const router = express.Router({ mergeParams: true });
const reviewController = require('../controllers/reviewController');

// get all reviews
router.get('/', reviewController.getAllReviews);

// get single review
router.get('/:reviewId', reviewController.getSingleReview);

// create new review
router.post('/', reviewController.createReview);

// update review
router.patch('/:reviewId', reviewController.updateReview);

// delete review
router.delete('/:reviewId', reviewController.deleteReview);

module.exports = router;