const mongoose = require('mongoose')
const actorSchema = require('./actorModel')
const movieSchema = require('./movieModel')
const reviewSchema = require('./reviewModel')

const Actor = mongoose.model('Actor', actorSchema)
const Movie = mongoose.model('Movie', movieSchema)
const Review = mongoose.model('Review', reviewSchema)

module.exports = {
    Actor,
    Movie,
    Review
}
