const mongoose = require(`mongoose`)
const Schema = mongoose.Schema
const db = require(`../db`)

const Actor = new Schema(
    {
        name: {type:String, required: true},
        age: {type: Number, required: true},
        isAlive: {type: Boolean, required: true},
        img: {type: 'String', required: true},
        movies: [{type: String, required: true}]
    },
    {timestamps: true}
)


module.exports = Actor