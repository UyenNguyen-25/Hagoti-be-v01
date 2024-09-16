const mongoose = require('mongoose');

const RoleSchema = new mongoose.Schema({
    role: {
        type: String,
        maxlength: 10
    }
});

const Role = mongoose.model('Role', RoleSchema);

module.exports = Role;
