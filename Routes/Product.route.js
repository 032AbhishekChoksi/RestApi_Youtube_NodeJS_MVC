const express = require('express');
const router = express.Router();

// get a list of all products
router.get('/', (req, res, next) => {
    res.send('getting a list of all products...');
});

// add new product
router.post('/', (req, res, next) => {
    res.send('product created');
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