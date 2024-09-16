const Role = require("../model/Role");

const roleController = {
    getAllRole: async (req, res) => {
        try {
            const roles = await Role.find();
            return res.status(200).json(roles);
        } catch (error) {
            console.log('Error: ', error);
            return res.status(500).json(error);
        }
    }
}

module.exports = roleController;