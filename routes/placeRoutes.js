const express = require('express');
const placeController = require('../controller/placeController');
const placeRouter = express.Router();


placeRouter.get('/get-all-place', placeController.getAllPlace);

module.exports = placeRouter;
