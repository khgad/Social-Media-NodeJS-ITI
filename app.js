const  express  = require("express");
const app = express();
const postRouter = require('./routes/postRoutes');
const commentRouter = require('./routes/commentRoutes');

app.use(express.json());
app.use('/posts/:postId/comments', commentRouter);
app.use('/posts', postRouter);

app.get('/', (req, res)=>{
    res.send('Hello from home page');
})

app.use((err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.message = err.message || 'Internal Server Error';
    console.log('from error handler');
    res.status(err.statusCode).json({
        status: 'error',
        message: err.message,
        // err
    });
});

module.exports = app;