const URL = require('../models/url.models.js');

async function handleRedirect(req, res) {
    const { shortid } = req.params;

    try {
        const entry = await URL.findOneAndUpdate(
            { shortId: shortid },
            {
                $push: {
                    visitHistory: {
                        timeStamp: Date.now(),
                    }
                }
            },
            { new: true } // Return the updated document
        );

        if (!entry) {
            return res.status(404).json({ error: 'Short URL not found' });
        }

        console.log(entry);
        res.redirect(entry.redirectURL);
    } catch (error) {
        console.error('Error updating visit history:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

module.exports = handleRedirect;
