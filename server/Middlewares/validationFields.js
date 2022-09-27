const { body, validationResult } = require('express-validator');

const validationRegister = [
    body('userName', 'fail to connect').notEmpty(),
    body('email', ' fail to connect').isEmail(),
    body('password', 'fail to connect').isLength({ min: 6 }),
];
const loginValidation = [validationRegister[1], validationRegister[2]];

const validation = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    };
    next();
}

module.exports = { validationRegister, loginValidation, validation }