const { approvalController } = require('../controllers/approval-controller')
const router = require('express').Router()
const { tokenJwt  } = require('../middlewares/authentication')
const { authorization } = require('../middlewares/authorization')


const approvalcontroller = new approvalController()
const tokenjwt = new tokenJwt()

//router sending approval
router.post('/api/approval/:id', tokenjwt.verifyToken, authorization(1), approvalcontroller.createApproval)
//only supervisor can access this endpoint
router.get('/api/approval', tokenjwt.verifyToken, authorization(2), approvalcontroller.getApproval)
//all 
router.get('/api/approval/all', tokenjwt.verifyToken, authorization(2), approvalcontroller.getAllApproval)
//only supervisor can access this endpoint
router.patch('/api/approval/:id', tokenjwt.verifyToken, authorization(2), approvalcontroller.approve)

module.exports = router