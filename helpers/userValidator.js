const Joi = require('joi');

const signUpSchema = Joi.object({
    userName: Joi.string().required().messages({"any.required":"Please Enter your Name"}),
    password: Joi.string().required().messages({"any.required":"Please Enter your password"}),
    email: Joi.string().email().required().lowercase().messages({"any.required":"You must Enter your email"}),
    isAdmin: Joi.boolean().optional()
})

const logInSchema = Joi.object({
    userName: Joi.string().required().messages({"any.required":"Please Enter your Name"}),
    password: Joi.string().required().messages({"any.required":"Please Enter your password"}),
})
module.exports = {signUpSchema , logInSchema}




