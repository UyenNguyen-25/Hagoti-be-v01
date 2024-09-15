import mongoose from 'mongoose';

const TripGroupTypeSchema = new mongoose.Schema({
    type: {
        type: String,
        maxlength: 50
    }
});

const TripGroupType = mongoose.model('TripGroupType', TripGroupTypeSchema);

export default TripGroupType;
