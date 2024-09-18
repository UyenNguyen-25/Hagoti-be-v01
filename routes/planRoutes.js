const express = require('express');
const planController = require('../controller/planController');
const planRouter = express.Router();


planRouter.get('/get-all-plan', planController.getAllPlan);
planRouter.post('/create', planController.createPlan);
planRouter.post('/create-random', planController.createRandomPlan);

module.exports = planRouter;
