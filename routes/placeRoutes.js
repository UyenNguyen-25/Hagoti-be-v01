const express = require('express');
const placeController = require('../controller/placeController');
const placeRouter = express.Router();


placeRouter.get('/get-all-place', placeController.getAllPlace);
placeRouter.post('/create', placeController.createPlace);
placeRouter.get('/get-place-by-id/:placeId', placeController.getPlaceById);

module.exports = placeRouter;
