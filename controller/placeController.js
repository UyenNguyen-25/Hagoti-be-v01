const { default: mongoose } = require("mongoose");
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
    },
    createPlace: async (req, res) => {
        try {
            const {
                name,
                typeId,
                open,
                close,
                rating,
                address,
                phoneNumber,
                menuId,
                thumbnail
            } = req.body;
            const existingPlace = await Place.findOne({ name });
            if (existingPlace) {
                return res.status(404).json("Place is already existed")
            }
            const newPlace = new Place({
                name,
                typeId: new mongoose.Types.ObjectId(typeId),
                open,
                close,
                rating,
                address,
                phoneNumber,
                menuId: new mongoose.Types.ObjectId(menuId),
                thumbnail
            });
             await newPlace.save();

            return res.status(201).json(newPlace);
        } catch (error) {
            console.log('Error: ', error);
            return res.status(500).json(error);
        }
    },
    getPlaceById: async (req, res) => {
        try {
            const place = await Place.findById(req.params.placeId)
            if(!place) {
                res.status(404).json("Place not found.");
            }
            return res.status(200).json(place);
        } catch (error) {
            console.log('Error: ', error);
            return res.status(500).json(error);
        }
    }
}

module.exports = placeController;