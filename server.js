require('express-async-errors');
require('./db');
const app = require('./app');
const {port} = require('./config');

app.listen(port, () => {
    console.log(`App running on port ${port}`)
})