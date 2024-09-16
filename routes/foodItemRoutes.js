const express = require('express');
const foodItemController = require('../controller/foodItemController');
const foodItemRouter = express.Router();


foodItemRouter.get('/get-all-foodItem', foodItemController.getAllFoodItem);

module.exports = foodItemRouter;
