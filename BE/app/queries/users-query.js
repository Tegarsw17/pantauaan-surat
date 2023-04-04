const { User } = require('../../db/models')
const bcrypt = require('bcrypt')


const createUser = async (payload) => {
    return User.create({
        fullname: payload.fullname,
        jabatan_role_id: payload.jabatan_role_id,
        phone: payload.phone,
        email: payload.email,
        password: bcrypt.hashSync(payload.password, 8),
    })
}

const findUserByEmail = async (payload) => {
    return User.findOne({
        where: { email: payload.email }
    })
}

const findUserById = async (payload) => {
    return User.findOne({
        where: { id: payload }
    })
}

const deleteUser = async (payload) => {
    return User.destroy({ where: {email: payload.email}})
}


module.exports = {
    createUser,
    findUserByEmail,
    findUserById,
    deleteUser
}