const { letterController } = require('../controllers/letters-controller')
const router = require('express').Router()
const { tokenJwt  } = require('../middlewares/authentication')


const lettercontroller = new letterController()
const tokenjwt = new tokenJwt()

//router save document
router.post()