const { DispositionLetter } = require('../../db/models')

const bulkCreate = async (data, trx) => {
    await DispositionLetter.bulkCreate(data, { transaction: trx })
}

const edit = async (data, trx) => {
    await DispositionLetter.update(data, {
        where: {
            id: data.id
        },
        transaction: trx
    })
}

const getById = async (id) => {
    return await DispositionLetter.findOne({
        where: {
            id
        }
    })
}

const getAll = async () => {
    return await DispositionLetter.findAll()
}

const deleteData = async (id) => {
    await DispositionLetter.destroy({
        where: {
            id
        }
    })
}

const getByRecipientId = async (id) => {
    return await DispositionLetter.findAll({
        where: {
            recipient_id: id
        }
    })
}

module.exports = {
    bulkCreate,
    edit,
    getById,
    getAll,
    deleteData,
    getByRecipientId,
}