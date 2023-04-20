const { Jabatan_role } = require('../../db/models')

const getRole = () => {
    return Jabatan_role.findAll()
}

module.exports = {
    getRole,
}