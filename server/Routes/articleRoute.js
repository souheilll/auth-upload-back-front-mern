const express = require('express');
const router = express.Router();
const { getAllArticles, addArticle } = require('../controllers/articleController');
const isAuth = require('../Middlewares/isAuth');
const upload = require('../Middlewares/uploads')

router.get('/all-article', getAllArticles);
router.post('/add-article', isAuth, upload.single('selectedFile'), addArticle);

module.exports = router;