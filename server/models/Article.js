const mongoose = require('mongoose');
const articleSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    selectedImage: { type: String, required: true }
});

module.exports = mongoose.model('article', articleSchema);