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

const findAllApproval = async (auth) => {
    return Approval.findAll({
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

const findOneApproval = async (payload) => {
    return Approval.findOne({where: {id: payload.id}})
}

const findApprovalStatus = async (payload) => {
    return Approval.findOne({
        where: {status: payload}})
}

const findOneApprovalUser = async (auth, payload) => {
    return Approval.findOne({
        where: {
            user_id: auth,
            id: payload.id
        }
    })
}

const updateApproval = async (body, status, params) => {
    return Approval.update(
        {
            catatan: body.catatan,
            status: status
        }, 
        {where: {id: params.id}}
    )
}

module.exports = {
    createApproval,
    findApproval,
    findApprovalStatus,
    findOneApproval,
    updateApproval,
    findOneApprovalUser,
    findAllApproval,
}