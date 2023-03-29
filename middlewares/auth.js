const Post = require('../models/postModel');
const CustomError = require('../helpers/customError');

const authorizeUpdateAndDelete = async (req, res, next) => {
        const logged_in_user = req.user.id;    
        const post_id = req.params.id;
        const post = await Post.findById(post_id);
        // verfiy that the logged in user is the author of the post
        if(post.author != logged_in_user){
            throw new CustomError(`you are not allowed to ${req.method === 'PATCH'? 'update': 'delete'} the post`, 401);
        }
        next();
}

module.exports = { 
    authorizeUpdateAndDelete 
}