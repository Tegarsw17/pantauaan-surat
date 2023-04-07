const { Approval, Surat, Upload_letter, User } = require('../../db/models')


const createApproval = async (surat_id, status_approval, catatan, user_id) => {
    return Approval.create({
        surat_id: surat_id,
        status: status_approval,
        catatan: catatan,
        user_id: user_id,
    })
}

const findApproval = async (auth) => {
    return Approval.findOne({
        where: {user_id: auth},
        include: [
                {model: Surat, include: [
                    {model: Upload_letter },
                    {model: User}
                ]},
                {model: User}
        ]
    })
}

const findApprovalStatus = async (payload) => {
    return Approval.findOne({where: {status: payload}})
}
module.exports = {
    createApproval,
    findApproval,
    findApprovalStatus
}