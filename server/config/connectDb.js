const mongoose = require('mongoose');
require('dotenv').config();
const url = process.env.URL || 'mongodb://127.0.0.1:27017';

const connectDb = async () => {
    try {
        await mongoose.connect(url);
        console.log('connected success to database')
    } catch (error) {
        console.log(error);
    }
}
module.exports = connectDb