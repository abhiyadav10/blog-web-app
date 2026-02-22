const mongoose = require('mongoose');

const Sechma = mongoose.Schema;

const UserSchema = new Sechma({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    }
    
})

module.exports = mongoose.model('User', UserSchema);