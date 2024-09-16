const Place = require("../model/Place");
const User = require("../model/User");

const userController = {
    getAllUser: async (req, res) => {
        try {
            const users = await User.find();
            return res.status(200).json(users);
        } catch (error) {
            console.log('Error: ', error);
            return res.status(500).json(error);
        }
    }
}

module.exports = userController;