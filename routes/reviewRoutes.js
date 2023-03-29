const express = require('express');
const router = express.Router({ mergeParams: true });
const reviewController = require('../controllers/reviewController');
const authControler= require("./../controllers/authControler");
const auth = require("./../middlewares/auth");
const validation = require('./../middlewares/validation');

router.use(validation.postExisting);

// get all reviews
router.get('/', reviewController.getAllReviews);

// get single review
router.get('/:reviewId', reviewController.getSingleReview);

// create new review
router.post('/', reviewController.createReview);

// update review
router.patch('/:reviewId', auth.authorizeUpdateAndDelete, reviewController.updateReview);

// delete review
router.delete('/:reviewId', auth.authorizeUpdateAndDelete, reviewController.deleteReview);

module.exports = router;