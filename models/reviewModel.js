const mongoose = require('mongoose');
const { Schema } = mongoose;
const _ = require('lodash');

const reviewSchema = new Schema({
    rate: {
        type: Number,
        required: true,
        min: 1,
        max: 10
    },
    post: {
        type: Schema.Types.ObjectId,
        ref: 'Post'
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
}, {
    toJSON: {
        transform: (dir, ret) => {
            const dataToReturn = _.pick(ret, ['_id', 'user', 'rate']);
            return dataToReturn;
        }
    }
});

const Review = mongoose.model('Review', reviewSchema);
module.exports = Review;