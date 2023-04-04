const { letterController } = require('../controllers/surats-controller')
const router = require('express').Router()
const { tokenJwt  } = require('../middlewares/authentication')
const { authorization } = require('../middlewares/authorization')


const lettercontroller = new letterController()
const tokenjwt = new tokenJwt()

//router save document
router.post('/api/surat', tokenjwt.verifyToken, authorization(1), lettercontroller.registerLetter)

module.exports = router