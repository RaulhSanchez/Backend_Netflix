const dataMovie = require('./model.js')

// Búsqueda de película.

module.exports.searchMovie = async (req, res) => {
    try{
        if (req.query) {
            const param = {}
            if (req.query.title) param.title = req.query.title
            if (req.query.genre) param.genre = req.query.genre
            if (req.query.actors) param.actors = req.query.actors
            const filter = await dataMovie.find(param);
            res.json({ data: filter })
        } else {
            const allMovies = await dataMovie.find()
            res.json({ data: allMovies })
        }
    }catch(eror){
        res.status(400).json({data:"No se ha encontrado niguna pelúcila"})
    }
}

// Búsqueda de película por ID.

module.exports.searchMovieById = async (req, res) => {
    try{
        const reqMovie = await dataMovie.find({_id:req.params.id })
        res.json({ data: reqMovie })
    }catch(error){
        res.status(400).json({data:"No se ha encontrado niguna pelúcila"})
    }
}

// Añadir película.

module.exports.addMovie = async (req, res) => {
    try{
        const newMovie = req.body;
        await dataMovie.create(newMovie);
        res.status(200).json({movie: newMovie})
    }catch(error){
        res.status(400).json({error:"No se ha podido añadir esta pelicula"})
    }
}

// Borrar película por ID.

module.exports.deleteMovie = async (req, res) => {
    try{
        const deleteMovie = await dataMovie.findOneAndDelete({_id:req.params.id})
        res.json({data:deleteMovie.title})
    }catch(error){
        res.status(400).json({error:"no se ha podido eliminar esta película"})
    }
}



