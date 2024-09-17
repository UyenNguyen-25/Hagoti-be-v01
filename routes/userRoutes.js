const express = require("express");
const userController = require("../controller/userController");
const userRouter = express.Router();

userRouter.get("/get-all-user", userController.getAllUsers);
userRouter.get("/get-user-by-phone", userController.getUserByPhone);
userRouter.get("/edit-user", userController.editUser);
userRouter.get("/change-password", userController.editUser);

module.exports = userRouter;
