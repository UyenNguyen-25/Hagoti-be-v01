const express = require('express');
const tripGroupTypeController = require('../controller/tripGroupTypeController');
const tripGroupTypeRouter = express.Router();


tripGroupTypeRouter.get('/get-all-tripGroupType', tripGroupTypeController.getAllTripGroupType);

module.exports = tripGroupTypeRouter;
