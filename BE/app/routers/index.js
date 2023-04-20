const userRouter =require('./users-router')
const letterRouter = require('./letters-router')
const uploadRouter = require('./upload-router')
const approvalRouter = require('./approval-router')
const roleRouter = require('./role-router')
const dispoRouter = require('./disposition-router')

module.exports = {
    userRouter,
    letterRouter,
    uploadRouter,
    approvalRouter,
    roleRouter,
    dispoRouter,
}