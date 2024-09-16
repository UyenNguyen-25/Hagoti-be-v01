const mongoose = require('mongoose');

const PlaceTypeSchema = new mongoose.Schema({
    type: {
        type: String,
        maxlength: 10
    }
});

const PlaceType = mongoose.model('PlaceType', PlaceTypeSchema);

module.exports = PlaceType;
