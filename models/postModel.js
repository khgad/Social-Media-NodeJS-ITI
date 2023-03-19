const mongoose = require('mongoose');
const { Schema } = mongoose;

const postSchema = new Schema({
    content: {
        type: String,
        required: true,
        trim: true,
        minlength: 10,
    },
    // user_id: {
    //     type: Schema.Types.ObjectId,
    //     ref: 'User'
    // }
},{
    timestamps: true
});

const Post = mongoose.model('Post', postSchema);
module.exports = Post;