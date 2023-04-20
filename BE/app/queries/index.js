const userQueries = require('../queries/users-query')
const letterQueries = require('../queries/surats-query')
const uploadQueries = require('../queries/upload_letter-query')
const approvalQueries = require('../queries/approval-query')
const roleQueries = require('../queries/jabatan_role-query')
const dispoQueries = require('../queries/disposition-query')


module.exports = {
    userQueries,
    letterQueries,
    uploadQueries,
    approvalQueries,
    roleQueries,
    dispoQueries,
}