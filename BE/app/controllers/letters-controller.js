
const {letterQueries, registerQueries} = require('../queries')
const message = require('../../response-helpers/messages').MESSAGE
const responseHendler = require('../../response-helpers/error-helper')


class letterController {

    async registerLetter(req, res) {
        try{
            //upload pdf
            const payload = req.body
            const auth = req.userId

            //create letters
            const createLetter = await letterQueries.createLetter(auth, payload)

            console.log(createLetter)
            if(!createLetter) { return responseHendler.badRequest(res, message('create letter').invalidCreateResource)}
            //create registers
            console.log(createLetter.id)
            const createRegister = await registerQueries.createRegister(createLetter.id, payload)
            if(!createRegister) { return responseHendler.badRequest(res, message('create register').invalidCreateResource)}

            return responseHendler.ok(res, message('document save').success)
        }

        catch(err){
            const key = err.message
            console.log(key)
            return responseHendler.internalError(res, message(key).errorMessage)
        }
    }

}


module.exports = {
    letterController
}
