const TripGroupType = require("../model/TripGroupType");

const tripGroupTypeController = {
    getAllTripGroupType: async (req, res) => {
        try {
            const tripGroupType = await TripGroupType.find();
            return res.status(200).json(tripGroupType);
        } catch (error) {
            console.log('Error: ', error);
            return res.status(500).json(error);
        }
    }
}

module.exports = tripGroupTypeController;