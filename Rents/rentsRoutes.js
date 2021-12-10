const router = require('express').Router() // Middleware te sirve para conectar las rutas desde app central.
const controller = require('./rentsController')
const validationJwt = require('../middleware')

router.post ('/add', controller.createRent)
router.get ('/ger', controller.searchRent)
router.get ('/all', controller.searchAllRents)
router.delete ('/delete', controller.deleteRent)

module.exports = router;