const mongooes = require('mongoose')

const urlSchema = new mongooes.Schema({
    shortId: {
        type: String,
        requires: true,
        unique: true
    },
    redirectUrl: {
        type: String,
        required: true
    },
    visitHistory: [{ timestamp: { type: Number}}]
}, {timestamps: true})

const URL = mongooes.model('url', urlSchema)

module.exports = URL