const { Approval } = require('../../db/models')


const createApproval = async (surat_id, status_approval, catatan, user_id) => {
    return Approval.create({
        surat_id: surat_id,
        status: status_approval,
        catatan: catatan,
        user_id: user_id,
    })
}

module.exports = {
    createApproval
}