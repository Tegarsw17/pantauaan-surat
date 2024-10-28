const DispositionLetterController = require('../controllers/disposition-letter-controller')
const router = require('express').Router()
const { tokenJwt  } = require('../middlewares/authentication')
const { authorization } = require('../middlewares/authorization')


const dispositionLetterController = new DispositionLetterController()
const tokenjwt = new tokenJwt()

router.post('/api/disposition/', tokenjwt.verifyToken, dispositionLetterController.createDispositionLetter)

router.get('/api/disposition/:id', tokenjwt.verifyToken, dispositionLetterController.getDispositionLetter)

router.get('/api/disposition', tokenjwt.verifyToken, dispositionLetterController.getAllDispositionLetter)

router.delete('/api/disposition/:id', tokenjwt.verifyToken, dispositionLetterController.deleteDispositionLetter)

router.patch('/api/disposition/:id', tokenjwt.verifyToken, dispositionLetterController.updateDispositionLetter)

module.exports = router