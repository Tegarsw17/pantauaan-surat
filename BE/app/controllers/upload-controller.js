const {uploadFile, __basedir} = require('../services/upload')
const {uploadQueries, letterQueries} = require('../queries')
const message = require('../../response-helpers/messages').MESSAGE
const responseHendler = require('../../response-helpers/error-helper')
const fs = require('fs')


class uploadController {

    async uploadDocument(req, res) {
        try{
            //upload pdf
            const payload = req.params
            if(!payload) {return responseHendler.badRequest(res, message('req.params').incompleteKeyOrValue)}
  
            const findLetter = await letterQueries.findSurat(payload)
            if(!findLetter) {return responseHendler.notFound(res, message('document id').notFoundResource)}
            
            await uploadFile(req, res)
            if(req.file === undefined) { return responseHendler.badRequest(res, message('document').incompleteKeyOrValue)}
            
            console.log(req.file)
            const createLetter = await uploadQueries.createUpload(findLetter, req.file)
            console.log(createLetter)
            if(!createLetter) { return responseHendler.badRequest(res, message('create letter').invalidCreateResource)}

            return responseHendler.ok(res, message('upload document').success)
        }

        catch(err){
            const key = err.message
            return responseHendler.internalError(res, message(key).errorMessage)
        }
    }

    async removeDocument (req, res) {

        try {
            const payload = req.params
            // find surat yang akan dihapus
           const findLetter = await letterQueries.findSurat(payload)
           if(!findLetter) {return responseHendler.notFound(res, message('document id').notFoundResource)}

            //find document 
            const findDocument = await uploadQueries.findUpload(findLetter)
            if(!findDocument) {return responseHendler.notFound(res, message('upload id').notFoundResource)}
            
            //menghapus image di storage
            fs.unlink(__basedir + `/storage/pdf/${findDocument.filename}`, 
                function (err)  {
                    if (err) {
                        const key = err.message
                        return responseHendler.internalError(res, message(key).errorMessage)
                    }
                    const deleteLetter = letterQueries.deleteSurat(findLetter)
                    if(!deleteLetter){return responseHendler.badRequest(res, message('delete letter').invalidCreateResource)}
                    
                    const deleteUpload = uploadQueries.deleteUpload(findDocument)
                    if(!deleteUpload){return responseHendler.badRequest(res, message('delete Document').invalidCreateResource)}

                    return responseHendler.ok(res, message('delete document').success)
                })
        }

        catch(err) {
            const key = err.message
            console.log(key)
            return responseHendler.internalError(res, message(key).errorMessage)
        }
    }

}


module.exports = {
    uploadController
}
