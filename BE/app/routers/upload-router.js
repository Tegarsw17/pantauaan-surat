const {uploadController} = require('../controllers/upload-controller')
const router = require('express').Router()
const { tokenJwt  } = require('../middlewares/authentication')
const { authorization } = require('../middlewares/authorization')


const uploadcontroller = new uploadController()
const tokenjwt = new tokenJwt()

//to upload document
router.post('/api/upload/:id', tokenjwt.verifyToken, authorization(1), uploadcontroller.uploadDocument)

router.delete('/api/upload/:id', tokenjwt.verifyToken, authorization(1), uploadcontroller.removeDocument)

module.exports = router