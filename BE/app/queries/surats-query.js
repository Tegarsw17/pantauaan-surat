const {Surat, Upload_letter, User, Approval} = require('../../db/models')

const createSurat = async (auth, payload, nomorAgenda) => {
    return Surat.create({
        user_id: auth,
        jenis_surat: payload.jenis_surat,
        nomor_agenda: nomorAgenda,
        nomor_surat: payload.nomor_surat,
        tujuan: payload.tujuan,
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

const findSurat = async (payload) => {
    return Surat.findOne({where: {id: payload.id}})
}

const deleteSurat = async (payload) => {
    return Surat.destroy({where: {id: payload.id}})
}

const findAllSurat = async (payload) => {
    return Surat.findAll({
        where: {jenis_surat: payload},
        include: [
            {model: Upload_letter},
            {model: User}
        ]
    })
}

const findAllSuratManager = async (payload) => {
    return Surat.findAll({
        where: {jenis_surat: payload},
        include: [
            {model: Upload_letter},
            {model: User},
            {model: Approval}
        ]
    })
}
const getDetail = async (payload) => {
    return Surat.findOne({
        where: {id: payload.id},
        include: [
            {model: Upload_letter},
            {model: User}
        ]
    })
}
const findOneByJenisSurat = async (payload) => {
    return Surat.findOne({
        where: {jenis_surat: payload.jenis_surat},
        order: [['id', 'DESC']]
    })
}
module.exports = {
    createSurat,
    findSurat,
    deleteSurat,
    findAllSurat,
    getDetail,
    findAllSuratManager,
    findOneByJenisSurat
}