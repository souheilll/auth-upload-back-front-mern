
const isAdmin =  (req, res, next) => {
        if (res.locals.user.role == 1) {
            next();
        } else {
            return res.status(403).json({ msg: 'only admin is authorised' });
        }
}

module.exports = isAdmin