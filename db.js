const mongoose = require('mongoose');
const { dbUrl } = require('./config')

const start = async () => {
    try {
        await mongoose.connect(dbUrl);
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};

start();