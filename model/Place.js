import mongoose from 'mongoose';

const PlaceSchema = new mongoose.Schema({
    name: {
        type: String,
        maxlength: 200
    },
    typeId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'PlaceType'
    },
    open: {
        type: Date
    },
    close: {
        type: Date
    },
    rating: {
        type: Number
    },
    address: {
        type: String,
        maxlength: 500
    },
    phoneNumber: {
        type: String
    },
    feedbackId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Feedback'
    },
    menuId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Menu'
    },
    thumbnail: {
        type: String
    }
});

const Place = mongoose.model('Place', PlaceSchema);

export default Place;
