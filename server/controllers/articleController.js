const Article = require('../models/Article');

const getAllArticles = async (req, res) => {
    try {
        const articles = await Article.find();
        res.status(201).json({ articles });

    } catch (error) {
        console.log(error);
    }
};

const addArticle = async (req, res) => {
    const enteredArticle = req.body;
    try {
        const article = new Article({ name: enteredArticle.articleName, selectedImage: req.file.filename });
        article.save();
        res.status(201).json({ article });

    } catch (error) {
        console.log(error);
    }
};
module.exports = { getAllArticles, addArticle }
