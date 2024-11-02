const { User, Jabatan_role } = require('../../db/models')
const { Op } = require('sequelize')

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
        where: { email: payload.email },
        include: {model: Jabatan_role }
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

const findUserByName = async (payload, role) => {
    return User.findOne({ 
        where: [
            {id: payload.id},
            {jabatan_role_id: role}
        ]})
}

const findAllUser = async (payload) => {
    return User.findAll()
}

const findUserByRole = async (payload) => {
    return User.findAll({
        where: {jabatan_role_id: payload}, 
        include: Jabatan_role
    })
}

const findRecipientDisposition = async () => {
    return User.findAll({
        where: {
            jabatan_role_id: {
                [Op.in]: [2, 11, 12, 13]
            }
        }, 
    })
}

const findUserByIds = async (ids) => {
    return User.findAll({
        where: { 
            id: {
                [Op.in]: ids,
            }
        }
    })
}

module.exports = {
    createUser,
    findUserByEmail,
    findUserById,
    deleteUser,
    findUserByName,
    findAllUser,
    findUserByRole,
    findRecipientDisposition,
    findUserByIds,
}