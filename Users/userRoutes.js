const router = require('express').Router() //middwalre te sirve para conectar las rutas desde app central
const controller = require('./userController')
// const validacionJwt=require('../middelware')


router.post('/alta',  controller.createUser ) // buscar pelicula mediante un id (posición del array) vamos a utilizar query params para 
router.post ('/login', controller.login)
router.get('/:id',  controller.searchUser ) // buscar pelicula mediante un id (posición del array) vamos a utilizar query params para 
router.put('/modificar/:id', controller.changeName)
router.delete('/eliminar',  controller.deleteUser)

module.exports = router;

