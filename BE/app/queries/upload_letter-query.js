const { Upload_letter } = require('../../db/models')

const createUpload = async (params, payload) => {
    Upload_letter.create({
        surat_id: params,
        filename: payload.filename,
        url: payload.url,
    })
}


module.exports = {
    createUpload,
}