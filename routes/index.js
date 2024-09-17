const express = require("express");
const authRoutes = require("../routes/authRoutes");
const placeRouter = require("./placeRoutes");
const userRouter = require("./userRoutes");
const feedbackRouter = require("./feedbackRoutes");
const foodItemRouter = require("./foodItemRoutes");
const menuRouter = require("./menuRoutes");
const placeTypeRouter = require("./placeTypeRoutes");
const planRouter = require("./planRoutes");
const roleRouter = require("./roleRoutes");
const servicePackageRouter = require("./servicePackageRoutes");
const transactionRouter = require("./transactionRoutes");
const tripGroupTypeRouter = require("./tripGroupType");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello World!");
});

router.use("/api", authRoutes);
router.use("/api/place", placeRouter);
router.use("/api/user", userRouter);
router.use("/api/feedback", feedbackRouter);
router.use("/api/foodItem", foodItemRouter);
router.use("/api/menu", menuRouter);
router.use("/api/placeType", placeTypeRouter);
router.use("/api/plan", planRouter);
router.use("/api/role", roleRouter);
router.use("/api/servicePackage", servicePackageRouter);
router.use("/api/transaction", transactionRouter);
router.use("/api/tripGroupTypeRouter", tripGroupTypeRouter);

module.exports = router;
