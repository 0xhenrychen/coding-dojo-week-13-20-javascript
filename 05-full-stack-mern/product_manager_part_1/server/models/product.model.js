const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required:[true, 'Title is required.'],
        minLength:[3, 'Title must be 3 or more characters.'],
        maxLength:[50, 'Title must be 50 or fewer characters.']
    },
    price: {
        type: Number,
        required:[true, 'Price is required.']
    },
    description: {
        type: String,
        required:[true, 'Description is required.'],
        minLength:[3, 'Description must be 3 or more characters.'],
        maxLength:[100, 'Description must be 100 or fewer characters.']
    }},
    {timestamps: true}
    );
module.exports = mongoose.model('Product', ProductSchema);