const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema({
    method: {
        type: String,
        maxlength: 50
    },
    price: {
        type: Number
    },
    status: {
        type: Boolean
    },
    serviceId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'servicePackage'
    }
}, { timestamps: true });

const Transaction = mongoose.model('Transaction', TransactionSchema);

module.exports = Transaction;
