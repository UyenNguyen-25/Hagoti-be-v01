import mongoose from 'mongoose';

const FeedbackSchema = new mongoose.Schema({
    content: {
        type: String,
        maxlength: 300
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    rating: {
        type: Number
    }
}, { timestamps: true });

const Feedback = mongoose.model('Feedback', FeedbackSchema);

export default Feedback;
