const mongoose = require('mongoose');
const { Schema } = mongoose;

const commentSchema = new Schema({
    content:{
        type: String,
        required: true,
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
},{
    timestamps: true
});

const Comment = mongoose.model('Comment', commentSchema);
module.exports = Comment;