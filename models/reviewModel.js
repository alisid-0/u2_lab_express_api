const mongoose = require(`mongoose`)
const Schema = mongoose.Schema
const db = require(`../db`)

const Review = new Schema(
    {
        movie: { type: Schema.Types.ObjectId, ref: 'Movie'},
        comment: { type: String, required: true}, 
        rating: { type: Number, required: true }  

    },
    {timestamps: true}
)

module.exports = Review