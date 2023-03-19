const CustomError = require('./helpers/customError');

require('dotenv').config();

const requiredEnvs = ['DB_URL'];
const missingEnvs = requiredEnvs.filter(env => !process.env[env]);
if (missingEnvs.length) {
    throw new CustomError(`Missing env ${missingEnvs.join(',')}`, 500);
}

module.exports = {
    dbUrl: process.env.DB_URL,
    port: process.env.PORT || 3000,
}