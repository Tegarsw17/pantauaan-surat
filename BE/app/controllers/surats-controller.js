
const {letterQueries, approvalQueries} = require('../queries')
const message = require('../../response-helpers/messages').MESSAGE
const responseHendler = require('../../response-helpers/error-helper')
const { suratDecorator, suratObjekDecorator, suratArrayDecorator } = require('../decorators/surats-decorator')
const { ApprovalSuratArrayDecorator} = require('../decorators/approvals-decorator')
const nomorAgendaService = require('../services/nomor_agenda')


class letterController {

    async registerLetter(req, res) {
        try{
            //upload pdf
            const payload = req.body
            const auth = req.userId

            //nomor agenda otomatis
            let nomorAgenda = 0
            const findSurat = await letterQueries.findOneByJenisSurat(payload)
            if(findSurat) {
                nomorAgenda = findSurat.nomor_agenda
            }
            const nomor = await nomorAgendaService(nomorAgenda)
            //create letters
            const createLetter = await letterQueries.createSurat(auth, payload, nomor)

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
            
            const data = await suratArrayDecorator(getAll)
            return responseHendler.ok(res, message('get all surat masuk').success, data)
        }

        catch(err) {
            const key = err.message
            return responseHendler.internalError(res, message(key).errorMessage)
        }
    }

    async getSuratMasukManager (req, res) {
        try {
            
            const getAll = await approvalQueries.findAllApproval('approve')
            if(getAll.length == 0){return responseHendler.notFound(res, message('document').notFoundResource)}
            
            const data = await ApprovalSuratArrayDecorator(getAll)
            // const data = getAll
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
            
            const data = await suratArrayDecorator(getAll)
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
            console.log(err)
            const key = err.message
            return responseHendler.internalError(res, message(key).errorMessage)
        }
    }   

    async SendApproval (req, res) {
        try {
            const suratId = req.param('id')
            if(suratId === undefined) { 
                return responseHendler.badRequest(res, message('id').incompleteKeyOrValue)
            }

            const surat = await letterQueries.getSuratById(suratId)
            if(!surat) { 
                return responseHendler.notFound(res, message('document').notFoundResource)
            }

            await letterQueries.updateStatusType(suratId, 'SEND_TO_APPROVED')
            return responseHendler.ok(res, message('success send approval').success, null)

        }

        catch (err) {
            console.log(err)
            const key = err.message
            return responseHendler.internalError(res, message(key).errorMessage)
        }
    }

    async AcceptApproval (req, res) {
        try {
            const suratId = req.param('id')
            if(suratId === undefined) { 
                return responseHendler.badRequest(res, message('id').incompleteKeyOrValue)
            }

            const surat = await letterQueries.getSuratById(suratId)
            if(!surat) { 
                return responseHendler.notFound(res, message('document').notFoundResource)
            }

            await letterQueries.updateStatusType(suratId, 'APPROVED')
            return responseHendler.ok(res, message('success send approval').success, null)

        }

        catch (err) {
            console.log(err)
            const key = err.message
            return responseHendler.internalError(res, message(key).errorMessage)
        }
    }

    async RejectApproval (req, res) {
        try {
            const suratId = req.param('id')
            if(suratId === undefined) { 
                return responseHendler.badRequest(res, message('id').incompleteKeyOrValue)
            }

            const surat = await letterQueries.getSuratById(suratId)
            if(!surat) { 
                return responseHendler.notFound(res, message('document').notFoundResource)
            }

            await letterQueries.updateStatusType(suratId, 'REJECTED')
            return responseHendler.ok(res, message('success reject letter').success, null)
        }

        catch (err) {
            console.log(err)
            const key = err.message
            return responseHendler.internalError(res, message(key).errorMessage)
        }
    }

    async sendDisposition (req, res) {
        try {
            const suratId = req.param('id')
            if(suratId === undefined) { 
                return responseHendler.badRequest(res, message('id').incompleteKeyOrValue)
            }

            const surat = await letterQueries.getSuratById(suratId)
            if(!surat) { 
                return responseHendler.notFound(res, message('document').notFoundResource)
            }

            await letterQueries.updateStatusType(suratId, 'DISPOSITION')
            return responseHendler.ok(res, message('success send disposition').success, null)
        }
        catch (err) {
            console.log(err)
            const key = err.message
            return responseHendler.internalError(res, message(key).errorMessage)
        }
        
    }

    async deleteLetter (req, res) {
        try {
            const suratId = req.param('id')
            if(suratId === undefined) { 
                return responseHendler.badRequest(res, message('id').incompleteKeyOrValue)
            }

            const surat = await letterQueries.getSuratById(suratId)
            if(!surat) { 
                return responseHendler.notFound(res, message('document').notFoundResource)
            }

            if (surat.status_type !== 'CREATED') {
                return responseHendler.badRequest(res, message('only status type created can be deleted').deleted)
            }

            await letterQueries.deleteSurat(suratId)
            return responseHendler.ok(res, message('success delete letter').success, null)
        }
        catch (err) {
            console.log(err)
            const key = err.message
            return responseHendler.internalError(res, message(key).errorMessage)
        }
    }

    async getAllForSpv (req, res) {
        try {
            const getAll = await letterQueries.findAllSpv('surat masuk')
            if(getAll.length == 0){return responseHendler.notFound(res, message('document').notFoundResource)}
            
            const data = await suratArrayDecorator(getAll)

            console.log(data)
            return responseHendler.ok(res, message('get all surat masuk').success, data)
        }

        catch(err) {
            const key = err.message
            return responseHendler.internalError(res, message(key).errorMessage)
        }
    }

    async getAllForManager (req, res) {
        try {
            const getAll = await letterQueries.findAllManager('surat masuk')
            if(getAll.length == 0){return responseHendler.notFound(res, message('document').notFoundResource)}
            
            const data = await suratArrayDecorator(getAll)
            return responseHendler.ok(res, message('get all surat masuk').success, data)
        }

        catch(err) {
            const key = err.message
            return responseHendler.internalError(res, message(key).errorMessage)
        }
    }


}


module.exports = {
    letterController
}
