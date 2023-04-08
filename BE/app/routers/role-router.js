const { roleController } = require('../controllers/jabatan_role-controller')
const router = require('express').Router()

const rolecontroller = new roleController()

router.get('/api/role', rolecontroller.geteRoles)

module.exports = router