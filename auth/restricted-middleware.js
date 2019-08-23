const jwt = require('jsonwebtoken');
const secrets = require('../config/secrets');

module.exports = function restricted(req, res, next) {
    const token = req.headers.authorization;

    if(token) {
        jwt.verify(token, secrets.jwtSecret, (err, decodedToken) => {
            if(err) {
                res.status(401).json({ error: err });
            } else {
                req.user = { username: decodedToken.username }
                next();
            }
        })
    } else {
        res.status(401).json({ message: "You need to log in first, fool." });
    }
}