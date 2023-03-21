const cloudinary = require('cloudinary');
require('dotenv').config();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET_KEY
})

// upload image to cloudinary 
const cloudinaryUploadImg = async(img)=>{
    try {
        const data = await cloudinary.uploader.upload(img, {resource_type: 'auto'})
        return data;
    } catch (error) {
        return error.message;
    }
}

// Remove image from cloudinary 
const cloudinaryRemoveImg = async(imgId)=>{
    try {
        const result = await cloudinary.uploader.destroy(imgId);
        return result;
    } catch (error) {
        return error.message;
    }
}

module.exports={
    cloudinaryUploadImg,
    cloudinaryRemoveImg
}