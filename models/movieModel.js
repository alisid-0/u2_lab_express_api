const mongoose = require(`mongoose`)
const Schema = mongoose.Schema
const db = require(`../db`)

const Movie = new Schema(
    {},
    {timestamps: true}
)

module.exports = Movie