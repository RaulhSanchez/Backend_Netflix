const {Schema, model} = require('mongoose');

const MovieSchema= new Schema({
    title:{type:String, require},
    director:[{type:String}],
    genre:[{type:String}],
    duration:{type:Number},
    actors:[{type:String},{type:String},{type:String}],  
})

module.exports = model('Movies', MovieSchema)