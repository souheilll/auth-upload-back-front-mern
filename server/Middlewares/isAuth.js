const jwt = require('jsonwebtoken');

const isAuth = async (req, res, next) => {
    const token = req.header('token');
    jwt.verify(token, 'shhhhh', (err, decodedPyload) => {
        if (err) {
            return res.status(401).json({ msg: 'you are not authorized' });
        }
        res.locals.user = decodedPyload;
        next()
    });
};
module.exports = isAuth