const { Movie } = require('../models')

const getAllMovies = async (req, res) => {
    try {
        const movies = await Movie.find()
        res.status(200).json(movies)
    } catch (e) {
        res.status(400).send(e.message)
    }
}

const getMovieByTitle = async (req, res) => {
    try {
        let searchKey = new RegExp(req.params.title, 'i')
        const movie = await Movie.find({title: searchKey})
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