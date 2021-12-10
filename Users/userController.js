const userData = require('./userModel.js')
const method = require('./userFunctions')

// Creamos user.

module.exports.createUser = async (req, res) => {
  try {
    const newUser = req.body;
    await userData.create(newUser)
    res.status(200).json({ user: newUser }); 
  } catch (error) {
    res.status(400).json({error:"400"});
  }
}

// Buscamos user.

module.exports.searchUser = async (req, res) => {
  try {
    const searchById = await userData.find({ _id: req.params.id })
    res.json({ searchById })
  } catch (error) {
    res.send({ Mensaje: 'Lo siento ha ocurrido un error de ${error}.' })
  }
}

// Login user.

module.exports.login = async (req, res) => {
  try {
    const checkMail = await userData.findOne({ email: req.body.email })
    const checkPassword = method.compareHash(req.body.password, checkMail.password)
    if (checkPassword) {
      const data = method.createToken(checkMail)
      res.json({ data: data })
    } else { res.send({ mensaje: '¡Error! Tu email o contraseña son incorrectos.' }) }
  } catch (error) { res.send({ mensaje: 'Tus datos son incorrectos: ${error}.' }) }
}

// Cambiar user.

module.exports.changeName = async (req, res) => {
  try {
    await userData.findOneAndUpdate({ _id: req.params.id }, { name: req.body.name })
    res.send('El nombre se ha cambiado perfectamente por: ' + req.body.name)
  } catch (error) { res.send({ mensaje: 'Lo siento ha ocurrido un error de ${error}.' }) }
}

// Eliminar user.

module.exports.deleteUser = async (req, res) => {
  const eliminate = await userData.findOneAndDelete({ _id: req.params.id })
  res.json({ data: eliminate.name })
}