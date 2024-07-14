const URL = require('../models/url.models.js');
const shortid = require('shortid');

async function handleGenerateNewShortURL(req, res) {
    const body = req.body;
    console.log(body);  // Log the body to debug
    if (!body || !body.url) {
        return res.status(400).json({
            error: 'url is empty'
        });
    }

    const shortID = shortid(8);

    try {
        await URL.create({
            shortId: shortID,
            redirectURL: body.url,
            visitHistory: []
        });

        return res.status(201).json({ id: shortID });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            error: 'Internal Server Error'
        });
    }
}

module.exports = handleGenerateNewShortURL;
