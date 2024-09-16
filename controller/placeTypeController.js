const PlaceType = require("../model/PlaceType");

const placeTypeController = {
    getAllPlaceType: async (req, res) => {
        try {
            const placeType = await PlaceType.find();
            return res.status(200).json(placeType);
        } catch (error) {
            console.log('Error: ', error);
            return res.status(500).json(error);
        }
    }
}

module.exports = placeTypeController;