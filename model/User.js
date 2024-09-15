import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    password: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        maxlength: 50
    },
    phonenumber: {
        type: String,
        required: true,
        maxlength: 11
    },
    avatar: {
        type: String
    },
    dob: {
        type: Date
    },
    gender: {
        type: String
    },
    fullName: {
        type: String,
        required: true,
        maxlength: 50
    },
    roleId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Role'
    },
    packageId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'servicePackage'
    },
    planId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Plan'
    },
    transactionId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Transaction'
    },
    favorite: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Place'
    },
    status: {
        type: String
    }
}, { timestamps: true });

const User = mongoose.model('User', UserSchema);

export default User;
