const Router = require(`express`).Router()
const controller = require(`../controllers/actorController`)

Router
    .get(`/`, controller.getAllActors)
    .get(`/:name`, controller.getActorByName)

module.exports = Router