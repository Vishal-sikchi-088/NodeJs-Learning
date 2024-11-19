const URL = require('../models/url')
const shortid = require('shortid')

async function generateNewShortUrl(req,res) {
    const body = req.body
    if(!body.url) {
        return res.status(400).json({error:'URL is required'})
    }
    const shortId = shortid()
    await URL.create({
        shortId: shortId,
        redirectUrl: body.url
    })

    return res.json({id: shortId})
}

module.exports = {
    generateNewShortUrl
}