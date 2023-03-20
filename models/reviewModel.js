const mongoose = require('mongoose');
const { Schema } = mongoose;

const reviewSchema = new Schema({
    rate:{
        type: Number,
        required: true,
        min:1,
        max: 10
    },
    post_id: {
        type: Schema.Types.ObjectId,
        ref: 'Post',
        required: true
    },
    // user_id: {
    //     type: Schema.Types.ObjectId,
    //     ref: 'User',
    //     required: true
    // }
});

const Review = mongoose.model('Review', reviewSchema);
module.exports = Review;