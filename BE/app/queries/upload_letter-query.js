const { Upload_letter } = require('../../db/models')

const createUpload = async (params, payload) => {
    return Upload_letter.create({
        surat_id: params.id,
        filename: payload.filename,
        url: payload.path,
    })
}


module.exports = {
    createUpload,
}