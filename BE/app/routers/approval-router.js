const { approvalController } = require('../controllers/approval-controller')
const router = require('express').Router()
const { tokenJwt  } = require('../middlewares/authentication')
const { authorization } = require('../middlewares/authorization')


const approvalcontroller = new approvalController()
const tokenjwt = new tokenJwt()

//router sending approval
router.post('/api/approval/:id', tokenjwt.verifyToken, authorization(1), approvalcontroller.createApproval)

module.exports = router