
const message = require('../../response-helpers/messages').MESSAGE
const responseHendler = require('../../response-helpers/error-helper')
const { userQueries, letterQueries, approvalQueries, dispoQueries } = require('../queries')


class dispositionController {

    async createDisposition (req, res) {

        try {
        //kirim disposisi:
        // cari suratnya ada atau tidak
        //cek surat sudah di approve atau belum
        const payloadBody = req.body
        const payloadParams = req.params

        const findSurat = await letterQueries.findSurat(payloadParams)
        if(!findSurat) { return responseHendler.notFound(res, message('surat').notFoundResource)}
        if(findSurat.jenis_surat == 'surat keluar') { return responseHendler.badRequest(res, message('must surat keluar').errorMessage)}

        const findApproval = await approvalQueries.findOneApproval(payloadParams)
        if(!findApproval) { return responseHendler.notFound(res, message('surat belum di approve').errorMessage)}

        const findUserByName = await userQueries.findUserByName(payloadBody)
        if(!findApproval) { return responseHendler.notFound(res, message('user tujuan').notFoundResource)}

        const createDisposi = await dispoQueries.createDisposition(findSurat.id,findUserByName.id ,req.body.klasifikasi_surat, '')
        if(!createDisposi) {return responseHendler.badRequest(res, message('disposi').invalidCreateResource)}
        
        return responseHendler.ok(res, message('disposisi').created)
        }

        catch (err) {
            const key = err.message
            console.log(key)
            return responseHendler.internalError(res, message(key).errorMessage)
        }
    }
}

module.exports = {
    dispositionController
}