const message = require('../../response-helpers/messages').MESSAGE
const responseHendler = require('../../response-helpers/error-helper')


const authorization = (role) => 
    (req, res, next) => {
        try {
            if(req.userRole !== role) {
                return responseHendler.authenticationFailed(res, message().unathorization)
                }
                next()
        }
        catch(err) {
            const key = err.message
            return responseHendler.internalError(res, message(key).errorMessage)
        }
       
    }


module.exports = {
    authorization,
}