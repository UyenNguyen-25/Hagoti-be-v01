const Transaction = require("../model/Transaction");

const transactionController = {
    getAllTransaction: async (req, res) => {
        try {
            const transactions = await Transaction.find();
            return res.status(200).json(transactions);
        } catch (error) {
            console.log('Error: ', error);
            return res.status(500).json(error);
        }
    }
}

module.exports = transactionController;