const mongooes = require('mongoose')

async function connectToMongoDb (url) {
    return mongooes.connect(url)
}

module.exports = connectToMongoDb