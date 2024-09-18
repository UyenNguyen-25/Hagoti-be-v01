const mongoose = require('mongoose');

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
    date: {
        type: Date
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true 
    },
    goWithId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'TripGroupType'
    },
    totalHour: {
        type: Number
    },
    places: [{
        placeId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Place'
        },
        order: {
            type: Number 
        }
    }],
    status: {
        type: String
    }
}, { timestamps: true });

const Plan = mongoose.model('Plan', PlanSchema);

module.exports = Plan;
