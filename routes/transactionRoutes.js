const express = require('express');
const transactionController = require('../controller/transactionController');
const transactionRouter = express.Router();


transactionRouter.get('/get-all-transactions', transactionController.getAllTransaction);

module.exports = transactionRouter;
