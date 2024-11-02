const { letterController } = require('../controllers/surats-controller')
const router = require('express').Router()
const { tokenJwt  } = require('../middlewares/authentication')
const { authorization } = require('../middlewares/authorization')


const lettercontroller = new letterController()
const tokenjwt = new tokenJwt()

//router save document
router.post('/api/surat', tokenjwt.verifyToken, authorization(1), lettercontroller.registerLetter)
//router get all surat masuk
router.get('/api/surat_masuk', tokenjwt.verifyToken, lettercontroller.getAllSuratMasuk)
//surat keluar
router.get('/api/surat_keluar', tokenjwt.verifyToken, lettercontroller.getAllSuratKeluar)
//get detail document
router.get('/api/surat/:id', tokenjwt.verifyToken, lettercontroller.getDetailletter)
//get surat masuk manager
router.get('/api/surat_masuk_manager', tokenjwt.verifyToken, lettercontroller.getSuratMasukManager)

//send approval
router.post('/api/approval/:id', lettercontroller.SendApproval)
//accept approval
router.post('/api/approval/accept/:id', lettercontroller.AcceptApproval)
//reject approval
router.patch('/api/approval/reject/:id', lettercontroller.RejectApproval)
//send disposition
router.post('/api/dispo/:id', tokenjwt.verifyToken,authorization(1), lettercontroller.sendDisposition)
//delete document
router.delete('/api/surat/:id', tokenjwt.verifyToken, authorization(1), lettercontroller.deleteLetter)
//get surat masuk spv
router.get('/api/surat_masuk/spv', tokenjwt.verifyToken, lettercontroller.getAllForSpv)
//get surat masuk manager
router.get('/api/surat_masuk/manager', tokenjwt.verifyToken, lettercontroller.getAllForManager)

module.exports = router