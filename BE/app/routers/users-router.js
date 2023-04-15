
const { userController } = require('../controllers/users-controller')
const router = require('express').Router()
const { tokenJwt  } = require('../middlewares/authentication')


const usercontroller = new userController()
const tokenjwt = new tokenJwt()


//router user
router.post('/api/register', usercontroller.registerUser )
//router login
router.post('/api/login', usercontroller.loginUser )
//router cek profile
router.get('/api/profile',tokenjwt.verifyToken, usercontroller.profileUser) //
//get user by role spv
router.get('/api/spv', usercontroller.getUserSpv)
//get user by role manager
router.get('/api/manager', usercontroller.getUserManager)

module.exports = router
