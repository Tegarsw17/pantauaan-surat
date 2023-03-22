const bcrypt = require('bcrypt')

const isMatch = async (payload, isExistUser) => {
    return await bcrypt.compare(payload, isExistUser.password)
}
module.exports = {
    isMatch
}