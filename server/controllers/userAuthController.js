const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
var { omit } = require('lodash');


const logIn = async (req, res) => {
    const userInfo = req.body;
    try {
        const user = await User.findOne({ email: userInfo.email });
        if (!user) {
            return res.status(422).json({ errors: [{ msg: 'you need to sign up' }] });
        } else {
            const comparePassword = await bcrypt.compare(userInfo.password, user.password);
            if (!comparePassword) {
                return res.status(422).json({ errors: [{ msg: 'failed to connect ' }] });
            }
            const token = jwt.sign({ id: user._id, role: user.role }, 'shhhhh');
            return res.status(201).json({ user: omit(user.toJSON(), ['password', "__v"]), token });
        }
    } catch (error) {
        res.status(500).json({ errors: [{ msg: 'server failed' }] });
    }
};


const signUp = async (req, res) => {
    const user = req.body;
    try {
        const searchedUser = await User.findOne({ email: user.email });
        if (searchedUser) {
            res.status(422).json({ errors: [{ msg: `${searchedUser.userName} already exist ` }] });
        }
        else {
            const hashedPassword = await bcrypt.hash(user.password, 10);
            const newUser = new User({ userName: user.userName, email: user.email, password: hashedPassword });
            await newUser.save();
            const token = jwt.sign({ id: newUser._id, role: newUser.role }, 'shhhhh');
            res.status(201).json({ newUser: omit(newUser.toJSON(), ["password", "__v"]), token, msg: 'signed up success' });
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({ errors: [{ msg: 'server failed' }] });
    }
};
module.exports = { logIn, signUp }