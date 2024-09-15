import mongoose from 'mongoose';

const RoleSchema = new mongoose.Schema({
    role: {
        type: String,
        maxlength: 10
    }
});

const Role = mongoose.model('Role', RoleSchema);

export default Role;
