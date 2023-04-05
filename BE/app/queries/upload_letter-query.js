const { Upload_letter } = require('../../db/models')

const createUpload = async (params, payload) => {
    return Upload_letter.create({
        surat_id: params.id,
        filename: payload.filename,
        url: payload.path,
    })
}

const findUpload = async (params) => {
    return Upload_letter.findOne({where: {surat_id: params.id}})
}

const deleteUpload = async (payload) => {
    return Upload_letter.destroy({where: {id: payload.id}})
}

module.exports = {
    createUpload,
    findUpload,
    deleteUpload
}