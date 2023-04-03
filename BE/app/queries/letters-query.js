const {Surat} = require('../../db/models')

const createLetter = async (auth, payload) => {
    return Surat.create({
        user_id: auth,
        jenis_surat: payload.jenis_surat,
        nomor_agenda: payload.nomor_agenda,
    })
}

module.exports = {
    createLetter
}