const express = require('express');
const mongoose = require('mongoose');

const app = express();
/*
mongodb+srv://root:<password>@cluster0.jztuj.mongodb.net/?retryWrites=true&w=majority
*/
mongoose.connect('mongodb+srv://cluster0.jztuj.mongodb.net/?retryWrites=true&w=majority/RestAPI_youtube', {
    dbName:'RestAPI_youtube',
    user:'root',
    pass:'root',
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('MongoDB Connected...');
});

const ProductRoute = require('./Routes/Product.route');
app.use('/products', ProductRoute);

app.use((req, res, next) => {
    const err = new Error('Page Not Found');
    err.status = 404;
    next(err);
});

// Error Handler
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.send({
        error: {
            status: err.status || 500,
            message: err.message
        }
    });
});

app.listen(3000, () => {
    console.log('Server started on port 3000...');
})