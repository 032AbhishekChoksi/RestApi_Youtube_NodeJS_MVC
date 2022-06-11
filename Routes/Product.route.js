const express = require('express');
const router = express.Router();

const Product = require('../Models/Product.model');

// get a list of all products
router.get('/', (req, res, next) => {
    next(new Error("cannot get a list of all products"))
    // res.send('getting a list of all products...');
});

// add new product
router.post('/', async (req, res, next) => {
    // async await Method
    try {
        const product = new Product(req.body);
        const result = await product.save();
        res.send(result);
    } catch (error) {
        console.log(error.message);
    }
    // Promises Method 
    // console.log(req.body);
    // const product = new Product({
    //     name: req.body.name,
    //     price: req.body.price
    // });
    // product.save()
    //     .then(result => {
    //         console.log(result);
    //         res.send(result);
    //     })
    //     .catch(err => {
    //         console.log(err.message);
    //         res.send(err.message);
    //     });
});

// to get a single product by its id
router.get('/:id', (req, res, next) => {
    res.send('get product by ID');
});

// to update a single product by its id
router.patch('/:id', (req, res, next) => {
    res.send('update product by ID');
});

// to delete a single product by its id
router.delete('/:id', (req, res, next) => {
    res.send('delete product by ID');
});

module.exports = router;