const { Schema, model} = require('mongoose');

const RentSchema = new Schema({
    idUser:{type: Schema.Types.ObjectId, ref: "User"},
    idMovies:[{type: Schema.Types.ObjectId, ref:"Movies"}]
})

module.exports = model("Rent", RentSchema)