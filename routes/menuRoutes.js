const express = require('express');
const menuController = require('../controller/menuController');
const menuRouter = express.Router();


menuRouter.get('/get-all-menu', menuController.getAllMenu);

module.exports = menuRouter;
