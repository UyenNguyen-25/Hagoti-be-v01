const express = require('express');
const planController = require('../controller/planController');
const planRouter = express.Router();


planRouter.get('/get-all-plan', planController.getAllPlan);

module.exports = planRouter;
