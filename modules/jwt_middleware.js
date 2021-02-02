const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => { // Validates the user token. if succeeded, user data will be added to the headers, else it will call the client to logout the user.
    try {
        let token = null;
        if (!req.headers.authorization) {
            throw "Missing Authorization header";
        } else {
            let broken = req.headers.authorization.split(" ");
            if (broken.length != 2 || broken[0] != 'Bearer' || broken[1].trim() == '') {
                throw "Invalid Authorization header";
            } else {
                token = req.headers.authorization.split(" ")[1];
                const decoded = jwt.verify(token, process.env.JWT_KEY);
                req.userData = {
                    id: decoded.userId
                }
                next();
            }
        }
    } catch (e) {
        return res.status(403).send({
            logout: true,
            message:'Authentication failed, please try to login again'
        });
    }
}