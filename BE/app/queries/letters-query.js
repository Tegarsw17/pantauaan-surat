const Letter = require('../../db/models')

const createLetter = async (auth, payload, url) => {
    return Letter.create({
        user_id: auth,
        jenis_surat: payload.jenis_surat,
        nomor_agenda: payload.nomor_agenda,
        url: url
    })
}


module.exports = {
    createLetter
}