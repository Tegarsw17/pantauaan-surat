const {roleQueries} = require('../queries')
const message = require('../../response-helpers/messages').MESSAGE
const responseHendler = require('../../response-helpers/error-helper')
const { roleDecorator } = require('../decorators/role-decorator')
 

class roleController  {

    async geteRoles (req, res) {
        try {
            const findRole = await roleQueries.getRole()
            if(!findRole) { return responseHendler.notFound(res, message('user tujuan').notFoundResource)}
            
            const data = await roleDecorator(findRole)
            return responseHendler.ok(res, message('get role').success, data)
        }
    
        catch (err) {
            const key = err.message
            console.log(key)
            return responseHendler.internalError(res, message(key).errorMessage)
        }
    }
}

module.exports = {
    roleController
}