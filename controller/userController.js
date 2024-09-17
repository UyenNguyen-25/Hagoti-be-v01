const Place = require("../model/Place");
const User = require("../model/User");

const userController = {
  getAllUsers: async (req, res) => {
    try {
      const users = await User.find();
      return res.status(200).json(users);
    } catch (error) {
      console.log("Error: ", error);
      return res.status(500).json(error);
    }
  },
  getUserByPhone: async (req, res) => {
    try {
      const phoneNumber = req.body.phoneNumber;

      if (!phoneNumber) {
        return res.status(404).json({ message: "phoneNumber is required" });
      }

      const foundUser = await User.findOne({ phoneNumber })
        .populate("roleId", "-_id")
        .populate("packageId", "-_id")
        .lean();

      if (!foundUser) {
        return res
          .status(404)
          .json({ message: "Số điện thoại này không tồn tại" });
      }

      return res.status(200).json(foundUser);
    } catch (error) {
      return res.status(500).json("Internal server error");
    }
  },
  editUser: async (req, res) => {
    try {
      const newData = req.body;

      //confirm data
      if (!newData.user_id) {
        return res.status(400).json({ message: "id is required" });
      }

      const foundUser = await User.findById(newData.user_id).exec();

      if (!foundUser) {
        return res.status(404).json({ message: "User not found" });
      }

      //check duplicate
      const duplicate = await User.findOne({
        phoneNumber: newData?.phoneNumber,
      })
        .lean()
        .exec();

      if (
        duplicate &&
        duplicate?._id.toString() !== newData.user_id.toString()
      ) {
        return res.status(409).json({ message: "Phone number existed" });
      }

      (foundUser.phoneNumber = newData?.phoneNumber),
        (foundUser.username = newData?.fullname),
        await user.save();

      return res.status(200).json(foundUser);
    } catch (error) {
      return res.status(500).json("Internal server error");
    }
  },
  changePassword: async (req, res) => {
    try {
      const newData = req.body;

      //confirm data
      if (!newData.user_id) {
        return res.status(400).json({ message: "id is required" });
      }

      const foundUser = await User.findById(newData.user_id).exec();

      if (!foundUser) {
        return res.status(404).json({ message: "User not found" });
      }

      //hash password
      if (newData.password && newData.password.length > 0) {
        foundUser.password = await bcrypt.hash(newData.password, 10);
      }

      await foundUser.save();
    } catch (err) {
      return res.status(500).json("Internal server error");
    }
  },
};

module.exports = userController;
