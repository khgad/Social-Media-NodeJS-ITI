const mongoose = require('mongoose');
const { Schema } = mongoose;
const _ = require('lodash');

const commentSchema = new Schema({
    content: {
        type: String,
        required: true,
    },
    post: {
        type: Schema.Types.ObjectId,
        ref: 'Post',
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
}, {
    timestamps: true,
    toJSON: {
        transform: (dir, ret) => {
            const dataToReturn = _.pick(ret, ['_id', 'user', 'content']);
            return dataToReturn;
        }
    }
});

const Comment = mongoose.model('Comment', commentSchema);
module.exports = Comment;