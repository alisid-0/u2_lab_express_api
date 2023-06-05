const { Actor } = require('../models')

const getAllActors = async (req, res) => {
    try {
        const actors = await Actor.find()
        res.status(200).json(actors)
    } catch (e) {
        res.status(400).send(e.message)
    }
}

const getActorsByMovie = async (req, res) => {
    try {
        const actors = await Actor.find({movie: req.params.movie})
        if (!actors) throw Error('actors not found')
        res.status(200).json(actors)
    } catch (e) {
        res.status(400).send(e.message)
    }
}

module.exports = {
    getAllActors,
    getActorsByMovie
}