const { letterController } = require('../controllers/surats-controller')
const router = require('express').Router()
const { tokenJwt  } = require('../middlewares/authentication')
const { authorization } = require('../middlewares/authorization')


const lettercontroller = new letterController()
const tokenjwt = new tokenJwt()

//router save document
router.post('/api/surat', tokenjwt.verifyToken, authorization(1), lettercontroller.registerLetter)
//router get all surat masuk
router.get('/api/surat_masuk', tokenjwt.verifyToken, authorization(1 || 2), lettercontroller.getAllSuratMasuk)
//surat keluar
router.get('/api/surat_keluar', tokenjwt.verifyToken, authorization(1 || 2), lettercontroller.getAllSuratKeluar)
//get detail document
router.get('/api/surat/:id', tokenjwt.verifyToken, lettercontroller.getDetailletter)

module.exports = router