const Register = require('../../db/models')

const createRegister = async (letterId, payload) => {
    return Register.create({
        surat_id: letterId,
        nomor_surat: payload.nomor_surat,
        pengirim: payload.pengirim,
        perihal: payload.perihal,
        tanggal_surat: payload.tanggal_surat,
        tanggal_diterima: payload.tanggal_diterima,
        status: payload.status,
        control: payload.control,
        unit_proses: payload.unit_proses,
        tindak_lanjut: payload.tindak_lanjut,
        keterangan: payload.keterangan,
    })
}


module.exports = {
    createRegister
}