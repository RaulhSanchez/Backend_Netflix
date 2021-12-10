const router = require('./rentsRoutes.js')
const rentData = require('./rentsModel.js')

module.exports.createRent = async (req, res) => {
    try {
      const newRent = req.body;
      await rentData.create(newRent)
      res.status(200).json({ rent: newRent }); 
    } catch (error) { res.status(400).json({error:"400"}); }
  }

module.exports.searchAllRents = async (req, res) => {
  try {
    const searchAll = await rentData.find({})
    res.json({ searchAll })
  }catch (error){ res.status(400).json({ Mensaje : 'Error'}) }
}

module.exports.searchRent = async (req, res) => {
    try {
      const searchById = await rentData.find({ idUser: req.query.idUser })
      res.json({ searchById })
    } catch (error) { res.send({ Mensaje: 'Lo siento ha ocurrido un error de ${error}.' }) }
  }

  module.exports.deleteRent = async (req, res) => {
      const eliminate = await rentData.findOneAndDelete({_id: req.params.id})
      res.json({ data: eliminate.id})
  }