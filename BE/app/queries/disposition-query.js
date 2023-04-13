
const { Disposition } = require('../../db/models')

const createDisposition = async (suratid, userid, klasifikasisurat, isidisposisi) => {
    return Disposition.create({
        surat_id: suratid,
        user_id: userid,
        klasifikasi_surat: klasifikasisurat,
        isi_disposisi: isidisposisi,
    })
}

module.exports = {
    createDisposition
}