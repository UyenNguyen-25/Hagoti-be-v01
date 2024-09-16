const express = require('express');
const feedbackController = require('../controller/feedbackController');
const feedbackRouter = express.Router();


feedbackRouter.get('/get-all-feedback', feedbackController.getAllFeedback);

module.exports = feedbackRouter;
