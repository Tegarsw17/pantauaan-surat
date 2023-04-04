const {Surat} = require('../../db/models')

const createSurat = async (auth, payload) => {
    return Surat.create({
        user_id: auth,
        jenis_surat: payload.jenis_surat,
        nomor_agenda: payload.nomor_agenda,
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
    createSurat
}