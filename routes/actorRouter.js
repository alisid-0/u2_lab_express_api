const Router = require(`express`).Router()
const controller = require(`../controllers/actorController`)

Router
    .get(`/`, controller.getAllActors)
    .get(`/:id`, controller.getActorByName)

module.exports = Router