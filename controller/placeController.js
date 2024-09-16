const Place = require("../model/Place");

const placeController = {
    getAllPlace: async (req, res) => {
        try {
            const places = await Place.find();
            return res.status(200).json(places);
        } catch (error) {
            console.log('Error: ', error);
            return res.status(500).json(error);
        }
    }
}

module.exports = placeController;