const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    role: {
        type: Number, default: 0
    },
    userName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('auth', userSchema);