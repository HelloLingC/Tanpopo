const serverConfig = require("../config/server.config")

exports.access = (req, res, next) => {
    if(req.orinalUrl === serverConfig.BANNED_HOST) {
        res.render("restriction");
    } else {
        next();
    }
}