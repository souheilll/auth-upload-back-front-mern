const express = require('express');
const router = express.Router();
const getAllUsers = require('../controllers/adminController.js');
const isAuth = require('../Middlewares/isAuth');
const isAdmin = require('../Middlewares/isAdmin');

router.get('/admin', isAuth, isAdmin, getAllUsers);

module.exports = router;