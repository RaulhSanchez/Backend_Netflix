const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv').config()
const app = express();
const moviesRoutes = require('./Movies/movieRoutes')
const userRoutes = require('./Users/userRoutes')
const rentRoutes = require('./Rents/rentsRoutes')

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.use(express.json()); 

mongoose.connect('mongodb+srv://cluster0.xu41s.mongodb.net/backend_netflix?retryWrites=true&w=majority', {
    user:"guille",
    pass: "guille",
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('Conectado a la BBDD.'))
    .catch((e) => console.log(e))

app.use('/user', userRoutes)
app.use('/movies', moviesRoutes)
app.use('/rent', rentRoutes)

app.listen(process.env.PORT, () => console.log('Funcionando'))
console.log(process.env.PORT)