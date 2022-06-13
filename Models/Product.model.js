const mongoose = require('mongoose');
const { softDeletePlugin } = require('soft-delete-plugin-mongoose');

const Schema = mongoose.Schema

const ProductSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
});

ProductSchema.plugin(softDeletePlugin);
const Product = mongoose.model('product', ProductSchema);
module.exports = Product;