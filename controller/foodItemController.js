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
    },
    createFoodItem: async (req, res) => {
        try {
            const {
                name,
                price
            } = req.body;
            const existingFoodItem = await FoodItem.findOne({ name });
            if(existingFoodItem) {
                return res.status(404).json("Food is already existed")
            }
            const newFoodItem = new FoodItem({ name, price });
            await newFoodItem.save();
            return res.status(200).json("Food is created successfully")
        } catch (error) {
            console.log('Error: ', error);
            return res.status(500).json(error);
        }
    }
}

module.exports = foodItemController;