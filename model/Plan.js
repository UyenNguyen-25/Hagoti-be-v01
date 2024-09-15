import mongoose from 'mongoose';

const PlanSchema = new mongoose.Schema({
    name: {
        type: String,
        maxlength: 200
    },
    min_budget: {
        type: Number
    },
    max_budget: {
        type: Number
    },
    from: {
        type: Date
    },
    to: {
        type: Date
    },
    goWithId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'TripGroupType'
    },
    totalHour: {
        type: Number
    },
    place: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Place'
    },
    status: {
        type: String
    }
}, { timestamps: true });

const Plan = mongoose.model('Plan', PlanSchema);

export default Plan;
