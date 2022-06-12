const express = require('express');
const createError = require('http-errors');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Initialixe DB
require('./DB/config')();

const ProductRoute = require('./Routes/Product.route');
app.use('/products', ProductRoute);

// app.all('/test/:id/:name',(req,res)=>{
//     // console.log(req.query);
//     // console.log(req.query.name);
//     // res.send(req.query);
//     console.log(req.params);
//     res.send(req.params);
// });

app.all('/test', (req, res) => {
    console.log(req.body);
    res.send(req.body);
});
// 404 handler and pass to error handler
app.use((req, res, next) => {
    // const err = new Error('Page Not Found');
    // err.status = 404;
    // next(err);
    next(createError(404, "Not Found"));
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