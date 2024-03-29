const createError = require('http-errors');
const mongoose = require('mongoose');

const Product = require('../Models/Product.model');

module.exports = {
    createNewProduct: async (req, res, next) => {
        // async await Method
        try {
            const product = new Product(req.body);
            const result = await product.save();
            res.send(result);
        } catch (error) {
            console.log(error.message);
            if (error.name === 'ValidationError') {
                next(createError(422, error.message));
                return;
            }
            next(error);
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
    },
    getAllProducts: async (req, res, next) => {
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
    },
    findProductById: async (req, res, next) => {
        try {
            const id = req.params.id;
            const product = await Product.findById(id);
            // const product = await Product.findOne({ _id: id });
            if (!product) {
                throw createError(404, 'Product does not exist.')
            }
            res.send(product);
        } catch (error) {
            console.log(error.message);
            if (error instanceof mongoose.CastError) {
                next(createError(400, 'Invalid Product id.'));
                return;
            }
            next(error);
        }
    },
    updateAProduct: async (req, res, next) => {
        try {
            const id = req.params.id;
            const updates = req.body;
            const options = { new: true };

            const result = await Product.findByIdAndUpdate(id, updates, options);
            if (!result) {
                throw createError(404, 'Product does not exist.')
            }
            res.send(result);
        } catch (error) {
            console.log(error.message);
            if (error instanceof mongoose.CastError) {
                next(createError(400, 'Invalid Product id.'));
                return;
            }
            next(error);
        }
    },
    deleteAProduct: async (req, res, next) => {
        try {
            const id = req.params.id;
            const result = await Product.findByIdAndDelete(id);
            if (!result) {
                throw createError(404, 'Product does not exist.')
            }
            res.send(result);
        } catch (error) {
            console.log(error.message);
            if (error instanceof mongoose.CastError) {
                next(createError(400, 'Invalid Product id.'));
                return;
            }
            next(error);
        }
    },
    softDeleteAProduct: async (req, res, next) => {
        try {
            const id = req.params.id;
            const result = await Product.softDelete({_id:id});
            if (!result) {
                throw createError(404, 'Product does not exist.')
            }
            res.send(result);
        } catch (error) {
            console.log(error.message);
            if (error instanceof mongoose.CastError) {
                next(createError(400, 'Invalid Product id.'));
                return;
            }
            next(error);
        }
    },
    getAllDeletedProducts:async (req, res, next) => {
        try {
            const result = await Product.findDeleted();
            if (!result) {
                throw createError(404, 'Product does not exist.')
            }
            res.send(result);
        } catch (error) {
            console.log(error.message);
            if (error instanceof mongoose.CastError) {
                next(createError(400, 'Invalid Product id.'));
                return;
            }
            next(error);
        }
    },
    restoreAProduct:async (req, res, next) => {
        try {
            const id = req.params.id;
            const result = await Product.restore({_id:id});
            if (!result) {
                throw createError(404, 'Product does not exist.')
            }
            res.send(result);
        } catch (error) {
            console.log(error.message);
            if (error instanceof mongoose.CastError) {
                next(createError(400, 'Invalid Product id.'));
                return;
            }
            next(error);
        }
    }
}