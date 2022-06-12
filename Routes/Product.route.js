const express = require('express');
const router = express.Router();

const ProductController = require('../Controllers/Product.Controller');

// get a list of all products
router.get('/', ProductController.getAllProducts);

// add new product
router.post('/', ProductController.createNewProduct);

// to get a single product by its id
router.get('/:id', ProductController.findProductById);

// to update a single product by its id
router.patch('/:id', ProductController.updateAProduct);

// to delete a single product by its id
router.delete('/:id', ProductController.deleteAProduct);

module.exports = router;