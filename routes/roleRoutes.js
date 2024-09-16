const express = require('express');
const roleController = require('../controller/roleController');
const roleRouter = express.Router();


roleRouter.get('/get-all-role', roleController.getAllRole);

module.exports = roleRouter;
