const User = require('../models/users-model')
const Surat = require('../models/letters-model')
const Disposition = require('../models/dispositions-model')
const Notification = require('../models/notifications-model')
const Jabatan_role = require('../models/jabatan_roles-model')
const Register = require('../models/registers-model')
const User_disposition = require('../models/user_dispositions-model')
const Upload_letter = require('../models/uploads-model')


Jabatan_role.belongsTo(User, {
    foreignKey: 'jabatan_role_id'
})

Surat.hasMany(Register, {
    foreignKey: 'surat_id'
})



module.exports = {
    User,
    Surat,
    Disposition,
    Notification,
    Jabatan_role,
    Register,
    User_disposition,
    Upload_letter,
}