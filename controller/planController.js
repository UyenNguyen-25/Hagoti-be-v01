const Plan = require("../model/Plan");

const planController = {
    getAllPlan: async (req, res) => {
        try {
            const plans = await Plan.find();
            return res.status(200).json(plans);
        } catch (error) {
            console.log('Error: ', error);
            return res.status(500).json(error);
        }
    }
}

module.exports = planController;