
const { Disposition } = require('../../db/models')

const createDisposition = async (suratid, userid, klasifikasisurat, isidisposisi, catatan) => {
    return Disposition.create({
        surat_id: suratid,
        user_id: userid,
        klasifikasi_surat: klasifikasisurat,
        isi_disposisi: isidisposisi,
        catatan: catatan,
    })
}

const getDisposition = async (payload) => {
    return Disposition.findAll({
        where: {user_id: payload}
    })
}

module.exports = {
    createDisposition,
    getDisposition
}