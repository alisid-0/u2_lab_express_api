const Router = require(`express`).Router()
const controller = require(`../controllers/reviewController`)

Router
    .get(`/`, controller.getAllReviews)
    .get(`/:id`, controller.getReviewsByMovie)

module.exports = Router