const Feedback = require("../model/Feedback");

const feedbackController = {
    getAllFeedback: async (req, res) => {
        try {
            const feedbacks = await Feedback.find();
            return res.status(200).json(feedbacks);
        } catch (error) {
            console.log('Error: ', error);
            return res.status(500).json(error);
        }
    }
}

module.exports = feedbackController;