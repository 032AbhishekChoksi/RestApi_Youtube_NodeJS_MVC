const express = require('express');
const router = express.Router();

const Product = require('../Models/Product.model');

// get a list of all products
router.get('/', async (req, res, next) => {
    // next(new Error("cannot get a list of all products"))
    try {
        const products = await Product.find({}, { __v: 0 });

        //// .find(query, projection)
        // const products = await Product.find({}, { name: 1, price: 1, _id: 0 });
        // const products = await Product.find({ price: 699 }, {});
        res.send(products);
    } catch (error) {
        console.log(error.message);
    }
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
router.get('/:id', async (req, res, next) => {
    try {
        const id = req.params.id;
        const product = await Product.findById(id);
        // const product = await Product.findOne({ _id: id });

        res.send(product);
    } catch (error) {
        console.log(error.message);
    }
});

// to update a single product by its id
router.patch('/:id', async (req, res, next) => {
    try {
        const id = req.params.id;
        const updates = req.body;
        const options = { new: true };

        const result = await Product.findByIdAndUpdate(id, updates, options);
        res.send(result);
    } catch (error) {
        console.log(error.message);
    }
});

// to delete a single product by its id
router.delete('/:id', async (req, res, next) => {
    try {
        const id = req.params.id;
        const result = await Product.findByIdAndDelete(id);
        console.log(result);
        res.send(result);
    } catch (error) {
        console.log(error.message);
    }
});

module.exports = router;