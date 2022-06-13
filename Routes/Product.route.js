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

// to softDeleted a single product by its id
router.post('/:id', ProductController.softDeleteAProduct);

// get a list of all deleted products
router.get('/trash', ProductController.getAllDeletedProducts);

// to restore deleted product
router.post('/restore/:id', ProductController.restoreAProduct);

module.exports = router;