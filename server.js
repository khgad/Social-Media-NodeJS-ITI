require('express-async-errors');

const app = require('./app');
const { port } = require('./config');

app.listen(port, ()=>{
    console.log(`App running on port ${port}`)
})