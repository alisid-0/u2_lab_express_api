const Router = require(`express`).Router()
const controller = require(`../controllers/actorController`)

Router
    .get(`/`, controller.getAllActors)
    .get(`/name/:name`, controller.getActorByName)
    .get(`/movie/:movie`, controller.getActorsByMovie)


module.exports = Router