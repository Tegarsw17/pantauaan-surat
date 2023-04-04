const User = require('../models/users-model')
const Surat = require('../models/surats-model')
const Disposition = require('../models/dispositions-model')
const Jabatan_role = require('../models/jabatan_roles-model')
const User_disposition = require('../models/user_dispositions-model')
const Upload_letter = require('../models/uploads-model')


Jabatan_role.belongsTo(User, {
    foreignKey: 'jabatan_role_id'
})

Surat.hasMany(Upload_letter, {
    foreignKey: 'surat_id'
})




module.exports = {
    User,
    Surat,
    Disposition,
    Jabatan_role,
    User_disposition,
    Upload_letter,
}