const {Surat, Upload_letter, User, Approval } = require('../../db/models')
const { Sequelize, Op } = require('sequelize')

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
        status_type: 'CREATED'
    })
}

const findSurat = async (payload) => {
    return Surat.findOne({where: {id: payload.id}})
}

const deleteSurat = async (id) => {
    return Surat.destroy({where: {id: id}})
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

const updateStatusType = async (id, status) => {
    return Surat.update({status_type: status}, {where: {id: id}})
}

const getSuratById = async (id) => {
    return Surat.findOne({where: {id: id}})
}

const findAllSpv = async (jenis_surat) => {
    try {
        const surats = await Surat.findAll({
            where: {
                jenis_surat: jenis_surat,
                status_type: {
                    [Sequelize.Op.not]: 'CREATED'
                }
            },
            include: [
                { model: Upload_letter },
                { model: User },
                { model: Approval }
            ]
        });
        return surats;
    } catch (error) {
        throw new Error(`Error in findAllSpv: ${error.message}`);
    }
};

const findAllManager = async (jenis_surat) => {
    try {
        const letter = await Surat.findAll({
            where: {
                jenis_surat: jenis_surat,
                status_type: 'DISPOSITION'
            },
            include: [
                { model: Upload_letter },
                { model: User },
                { model: Approval }
            ]
        });
        return letter;
    } catch (error) {
        throw new Error(`Error in findAllManager: ${error.message}`);
    }
};

module.exports = {
    createSurat,
    findSurat,
    deleteSurat,
    findAllSurat,
    getDetail,
    findAllSuratManager,
    findOneByJenisSurat,
    updateStatusType,
    getSuratById, 
    findAllSpv,
    findAllManager, 
}