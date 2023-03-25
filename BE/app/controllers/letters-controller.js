const {uploadFile} = require('../services/upload')
const {letterQueries, registerQueries} = require('../queries')
const message = require('../../response-helpers/messages').MESSAGE
const responseHendler = require('../../response-helpers/error-helper')


class letterController {

    async registerLetter(req, res) {
        try{
            //upload pdf
            const payload = req.body
            const auth = req.userId

            await uploadFile(req, res)
            if(req.files === undefined) { return responseHendler.badRequest(res, message('document').incompleteKeyOrValue)}
            
            //create letters
            const createLetter = await letterQueries.createLetter(auth, payload, req.files.url)
            if(!createLetter) { return responseHendler.badRequest(res, message('create letter').invalidCreateResource)}
            //create registers
            const createRegister = await registerQueries.createRegister(createLetter.id, payload)
            if(!createRegister) { return responseHendler.badRequest(res, message('create register').invalidCreateResource)}

            return responseHendler.ok(res, message('document save').success)
        }

        catch(err){
            const key = err.message
            return responseHendler.internalError(res, message(key).errorMessage)
        }
    }

}

