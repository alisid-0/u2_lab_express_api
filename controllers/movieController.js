const { Movie } = require('../models')

const getAllMovies = async (req, res) => {
    try {
        let movies
        if(req.query.sort) {
            // console.log(req.query.sort)
            if (req.query.sort == 'asc'){
                movies = await Movie.find().populate({path: 'reviews', model: 'Review'}).populate({path: 'actors', model: 'Actor'}).sort({title: 1})
            } else if (req.query.sort == 'desc') {
                movies = await Movie.find().populate({path: 'reviews', model: 'Review'}).populate({path: 'actors', model: 'Actor'}).sort({title: -1})
            } else if (req.query.sort == 'new') {
                movies = await Movie.find().populate({path: 'reviews', model: 'Review'}).populate({path: 'actors', model: 'Actor'}).sort({year_released: -1})
            } else if (req.query.sort == 'old') {
                movies = await Movie.find().populate({path: 'reviews', model: 'Review'}).populate({path: 'actors', model: 'Actor'}).sort({title: 1})
            }
        } else {
            movies = await Movie.find().populate({path: 'reviews', model: 'Review'}).populate({path: 'actors', model: 'Actor'})
        }
        res.status(200).json(movies)
    } catch (e) {
        res.status(400).send(e.message)
    }
}

const getMovieByTitle = async (req, res) => {
    try {
        let searchKey = new RegExp(req.params.title, 'i')
        const movie = await Movie.find({title: searchKey}).populate({path: 'actors', model: 'Actor'}).populate({path: 'reviews', model: 'Review'})
        if (!movie) throw Error('movie not found')
        res.status(200).json(movie)
    } catch (e) {
        res.status(400).send(e.message)
    }
}

module.exports = {
    getAllMovies,
    getMovieByTitle
}