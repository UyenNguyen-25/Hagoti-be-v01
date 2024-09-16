const express = require('express');
const placeTypeController = require('../controller/placeTypeController');
const placeTypeRouter = express.Router();


placeTypeRouter.get('/get-all-placeType', placeTypeController.getAllPlaceType);

module.exports = placeTypeRouter;
