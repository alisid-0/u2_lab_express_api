const mongoose = require(`mongoose`)
const Schema = mongoose.Schema
const db = require(`../db`)

const Actor = new Schema(
    {},
    {timestamps: true}
)

module.exports = Actor