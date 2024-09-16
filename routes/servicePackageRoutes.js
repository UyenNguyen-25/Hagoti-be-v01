const express = require('express');
const servicePackageController = require('../controller/servicePackageController');
const servicePackageRouter = express.Router();


servicePackageRouter.get('/get-all-service', servicePackageController.getAllServicePackage);

module.exports = servicePackageRouter;
