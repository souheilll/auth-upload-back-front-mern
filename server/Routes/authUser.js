const express = require('express');
const router = express.Router();
const { logIn, signUp } = require('../controllers/userAuthController.js');
const { validationRegister, loginValidation, validation } = require('../Middlewares/validationFields')

router.post('/login', loginValidation, validation, logIn);
router.post('/sign-up', validationRegister, validation, signUp);

module.exports = router


