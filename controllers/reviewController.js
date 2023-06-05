const { Review } = require('../models')

const getAllReviews = async (req, res) => {
    try {
        const reviews = await Review.find()
        res.status(200).json(reviews)
    } catch (e) {
        res.status(400).send(e.message)
    }
}

const getReviewsByMovie = async (req, res) => {
    try {
        const reviews = await Review.find({movie: req.params.movie})
        if (!reviews) throw Error('reviews not found')
        res.status(200).json(reviews)
    } catch (e) {
        res.status(400).send(e.message)
    }
}

module.exports = {
    getAllReviews,
    getReviewsByMovie
}