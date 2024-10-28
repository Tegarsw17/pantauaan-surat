const {userQueries, letterQueries, dispositionLetterQueries } = require('../queries')
const message = require('../../response-helpers/messages').MESSAGE
const responseHandler = require('../../response-helpers/error-helper')

class DispositionLetterController {
    async createDispositionLetter(req, res) {
        try {
            const { recipient_ids, letter_id, catatan } = req.body
            const senderId = req.userId
            
            const letter = await letterQueries.findSurat({id: letter_id})
            if(!letter) {return responseHandler.notFound(res, message('letter').notFoundResource)}
    
            const data = []
            recipient_ids.forEach(each => {
                data.push({
                    recipient_id: each,
                    letter_id: letter_id,
                    sender_id: senderId,
                    catatan: catatan,
                    pengirim: letter.pengirim,
                    perihal: letter.perihal,
                    tanggal_surat: letter.tanggal_surat,
                    tanggal_diterima: letter.tanggal_diterima
                })
            });
            await dispositionLetterQueries.bulkCreate(data, null)
    
            return responseHandler.ok(res, message('create disposition').success)
        }

        catch(err){
            const key = err.message
            return responseHandler.internalError(res, message(key).errorMessage)
        }
    }
    async getDispositionLetter(req, res) {
        try {
            const id = req.param('id')
            const data = await dispositionLetterQueries.getDispositionLetter(id)
            if(!data) { return responseHandler.notFound(res, message('disposition').notFoundResource)}

            return responseHandler.ok(res, message('get disposition').success, data)

        } catch (error) {
            const key = err.message
            return responseHandler.internalError(res, message(key).errorMessage)
        }
    }
    async getAllDispositionLetter(req, res) {
        try {
            const userId = req.userId

            const user = await userQueries.findUserById(senderId)
            if(!user) { return responseHandler.notFound(res, message('user').notFoundResource)}

            let result;
            if (user.is_admin == true) {
                result = await dispositionLetterQueries.getAll()
            } else {
                result = await dispositionLetterQueries.getByUserId(userId)
            }

            return responseHandler.ok(res, message('get all disposition').success, result)
        } catch (error) {
            const key = err.message
            return responseHandler.internalError(res, message(key).errorMessage)
        }
    }
    async deleteDispositionLetter(req, res) {
        try {
            const id = req.param('id')

            const data = await dispositionLetterQueries.getDispositionLetter(id)
            if(!data) { return responseHandler.notFound(res, message('disposition').notFoundResource)}

            await dispositionLetterQueries.deleteData(id)

            return responseHandler.ok(res, message('delete disposition').success)

        } catch (error) {
            const key = err.message
            return responseHandler.internalError(res, message(key).errorMessage)
        }
    }

    async updateDispositionLetter(req, res) {
        try {
            const id = req.param('id')
            const payload = req.body

            const data = await dispositionLetterQueries.getDispositionLetter(id)
            if(!data) { return responseHandler.notFound(res, message('disposition').notFoundResource)}


            await dispositionLetterQueries.updateData(id, payload)
    
            return responseHandler.ok(res, message('update disposition').success)
    
        } catch (error) {
            const key = err.message
            return responseHandler.internalError(res, message(key).errorMessage)
        }
    }
}
module.exports = DispositionLetterController