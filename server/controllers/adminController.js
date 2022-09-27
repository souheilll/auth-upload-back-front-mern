const User = require('../models/User');

const getAllUers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(201).json({ users });
    } catch (error) {
        console.log(error);
    }
}

module.exports = getAllUers 