const Router = require(`express`).Router()
const controller = require(`../controllers/actorController`)

Router
    .get(`/`, controller.getAllMovies)
    .get(`/:id`, controller.getMovieByActor)

module.exports = Router