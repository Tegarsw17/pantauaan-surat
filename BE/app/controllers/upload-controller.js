const {uploadFile} = require('../services/upload')
const {uploadQueries, letterQueries} = require('../queries')
const message = require('../../response-helpers/messages').MESSAGE
const responseHendler = require('../../response-helpers/error-helper')


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

}


module.exports = {
    uploadController
}
