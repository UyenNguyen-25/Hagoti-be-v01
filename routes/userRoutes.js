const express = require('express');
const userController = require('../controller/userController');
const userRouter = express.Router();


userRouter.get('/get-all-user', userController.getAllUser);

module.exports = userRouter;
