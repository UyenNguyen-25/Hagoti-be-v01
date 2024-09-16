const mongoose = require('mongoose');

const FoodItemSchema = new mongoose.Schema({
    name: {
        type: String,
        maxlength: 100
    },
    price: {
        type: Number
    }
});

const FoodItem = mongoose.model('FoodItem', FoodItemSchema);

module.exports = FoodItem;
