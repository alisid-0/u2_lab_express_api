const mongoose = require(`mongoose`)
const Schema = mongoose.Schema
const db = require(`../db`)

const Movie = new Schema(
    {
        title: {type:String, required: true},
        runtime: {type: Number, required: true},
        rating: {type: String, required: true},
        year_released: {type: String, required: true},
        img: {type: String, required: true},
        description: {type: String, required: true},
        actors: [{type: Schema.Types.ObjectId, ref: 'Actor'}],
        reviews: [{type: Schema.Types.ObjectId, ref: 'Review'}]
    },
    {timestamps: true}
)

module.exports = Movie