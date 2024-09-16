const FoodItem = require("../model/FoodItem");

const foodItemController = {
    getAllFoodItem: async (req, res) => {
        try {
            const foodItem = await FoodItem.find();
            return res.status(200).json(foodItem);
        } catch (error) {
            console.log('Error: ', error);
            return res.status(500).json(error);
        }
    }
}

module.exports = foodItemController;