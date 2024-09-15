import mongoose from 'mongoose';

const PlaceTypeSchema = new mongoose.Schema({
    type: {
        type: String,
        maxlength: 10
    }
});

const PlaceType = mongoose.model('PlaceType', PlaceTypeSchema);

export default PlaceType;
