const { dispositionController } = require('../controllers/dispositions-controller')
const router = require('express').Router()
const { tokenJwt  } = require('../middlewares/authentication')
const { authorization } = require('../middlewares/authorization')


const dispocontroller = new dispositionController()
const tokenjwt = new tokenJwt()

router.post('/api/dispo', tokenjwt.verifyToken, authorization(1), dispocontroller.createDisposition)

module.exports = router