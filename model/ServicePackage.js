const mongoose = require('mongoose');

const ServicePackageSchema = new mongoose.Schema({
    name: {
        type: String,
        maxlength: 10
    },
    price: {
        type: Number
    },
    discount: {
        type: Number
    }
}, { timestamps: true });

const ServicePackage = mongoose.model('servicePackage', ServicePackageSchema);

module.exports = ServicePackage;
