const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken")
const moment = require("moment")


module.exports.createHash = (password) => {
    let encrypted = bcrypt.hashSync(password, 10)
    return encrypted
}
module.exports.compareHash = (passwordPlane, userPass) => {

    let comparation = bcrypt.compareSync(passwordPlane, userPass)
    return comparation
}
module.exports.createToken = (user) => {
    const payload = {
        data: user._id,
        role: user.role,
        iat: moment().unix(),
        exp: moment().add(1, 'days').unix()
    }
    return jwt.sign(payload, process.env.PORT)
}