
const {letterQueries} = require('../queries')
const message = require('../../response-helpers/messages').MESSAGE
const responseHendler = require('../../response-helpers/error-helper')
const { suratDecorator, suratObjekDecorator } = require('../decorators/surats-decorator')


class letterController {

    async registerLetter(req, res) {
        try{
            //upload pdf
            const payload = req.body
            const auth = req.userId

            //create letters
            const createLetter = await letterQueries.createSurat(auth, payload)

            if(!createLetter) { return responseHendler.badRequest(res, message('register document').invalidCreateResource)}
            
            const data = suratDecorator(createLetter)
            return responseHendler.ok(res, message('register document').success, data)
        }

        catch(err){
            const key = err.message
            console.log(key)
            return responseHendler.internalError(res, message(key).errorMessage)
        }
    }

    async getAllSuratMasuk (req, res) {
        try {
            const getAll = await letterQueries.findAllSurat('surat masuk')
            if(getAll.length == 0){return responseHendler.notFound(res, message('document').notFoundResource)}
            
            const data = getAll
            return responseHendler.ok(res, message('get all surat masuk').success, data)
        }

        catch(err) {
            const key = err.message
            return responseHendler.internalError(res, message(key).errorMessage)
        }
    }

    async getAllSuratKeluar (req, res) {
        try {
            const getAll = await letterQueries.findAllSurat('surat keluar')
            if(getAll.length == 0){return responseHendler.notFound(res, message('document').notFoundResource)}
            
            const data = getAll
            return responseHendler.ok(res, message('get all surat keluar').success, data)
        }

        catch(err) {
            const key = err.message
            return responseHendler.internalError(res, message(key).errorMessage)
        }
    }

    async getDetailletter(req, res) {
        try {
            const payload = req.params
            if(payload === undefined) { return responseHendler.badRequest(res, message('query').incompleteKeyOrValue)}

            const findDetail = await letterQueries.getDetail(payload)
            if(!findDetail) { return responseHendler.notFound(res, message('document').notFoundResource)}

            const data = await suratObjekDecorator(findDetail)
            return responseHendler.ok(res, message('detail document').success, data)
        }

        catch (err) {
            const key = err.message
            return responseHendler.internalError(res, message(key).errorMessage)
        }
    }   

}


module.exports = {
    letterController
}
