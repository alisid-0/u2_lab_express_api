const { Actor } = require('../models')

const getAllActors = async (req, res) => {
    try {
        const actors = await Actor.find().populate({path: 'movies', model: 'Movie'})
        res.status(200).json(actors)
    } catch (e) {
        res.status(400).send(e.message)
    }
}

const getActorByName = async (req, res) => {
    try {
        let searchKey = new RegExp(req.params.name, 'i')
        const actor = await Actor.find({name: searchKey})
        if (!actor) throw Error('actor not found')
        res.status(200).json(actor)
    } catch (e) {
        res.status(400).send(e.message)
    }
}

module.exports = {
    getAllActors,
    getActorByName
}