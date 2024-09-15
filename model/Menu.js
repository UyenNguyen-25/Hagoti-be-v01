import mongoose from 'mongoose';

const MenuSchema = new mongoose.Schema({
    foodItemId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'FoodItem'
    }
});

const Menu = mongoose.model('Menu', MenuSchema);

export default Menu;
