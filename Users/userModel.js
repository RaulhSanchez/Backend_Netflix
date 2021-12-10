const hash = require('./userFunctions')
const { Schema, model } = require('mongoose');


const userSchema = new Schema({
    name:{ type: String, required: true, trim: true, },
    // lastName:{ type: String, required: true },
    // age:{ type: Number, required: true },
    // role:{ type: String, required: true, lowercase: true, },
    email:{
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Por favor, ingresa un mail válido.']
    },
    password: {
        required: true,
        type: String,
        // minlength: 8, // colocar en el controlador
        set:hash.createHash
    },
}) 

module.exports = model('User', userSchema)