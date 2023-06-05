const Router = require(`express`).Router()
const controller = require(`../controllers/movieController`)

Router
    .get(`/`, controller.getAllMovies)
    .get(`/:title`, controller.getMovieByTitle)

module.exports = Router