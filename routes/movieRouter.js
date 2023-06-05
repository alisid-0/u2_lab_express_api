const Router = require(`express`).Router()
const controller = require(`../controllers/movieController`)

Router
    .get(`/`, controller.getAllMovies)
    .get(`/:id`, controller.getMovieByTitle)

module.exports = Router