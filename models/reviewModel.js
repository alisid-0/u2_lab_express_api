const mongoose = require(`mongoose`)
const Schema = mongoose.Schema
const db = require(`../db`)

const Review = new Schema(
    {},
    {timestamps: true}
)

module.exports = Review