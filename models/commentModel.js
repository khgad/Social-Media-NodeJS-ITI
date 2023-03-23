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
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
}, {
    timestamps: true,
    toJSON: {
        transform: (dir, ret) => {
            const dataToReturn = _.pick(ret, ['_id', 'author', 'content']);
            return dataToReturn;
        }
    }
});

const Comment = mongoose.model('Comment', commentSchema);
module.exports = Comment;