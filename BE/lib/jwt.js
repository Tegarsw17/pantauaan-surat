const jwt = require('jsonwebtoken')
const config = require('../db/config/auth')

const generateToken = async (payload) => {

    const token = jwt.sign({ id: payload.id, role: payload.jabatan_role_id}, config.secret, ({expiresIn: '1440 minutes'})) //5 minutes

    return token
}

module.exports = generateToken