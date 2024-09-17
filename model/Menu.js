const mongoose = require('mongoose');

const MenuSchema = new mongoose.Schema({
    foodItemId: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'FoodItem'
    }]
});

const Menu = mongoose.model('Menu', MenuSchema);

module.exports = Menu;
