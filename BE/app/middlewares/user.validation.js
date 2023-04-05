const validator = require('validator')

const emailFormatValidator = async (payload) => {
    const email = await validator.isEmail(payload.email)

    return email
}

const phoneFormatValidator = async (payload) => {
    const phone = await validator.isMobilePhone(payload.phone,['id-ID'])

    return phone 
}

module.exports = {
    emailFormatValidator,
    phoneFormatValidator
}