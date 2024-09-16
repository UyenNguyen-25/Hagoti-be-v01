const ServicePackage = require("../model/ServicePackage");

const servicePackageController = {
    getAllServicePackage: async (req, res) => {
        try {
            const servicePackage = await ServicePackage.find();
            return res.status(200).json(servicePackage);
        } catch (error) {
            console.log('Error: ', error);
            return res.status(500).json(error);
        }
    }
}

module.exports = servicePackageController;