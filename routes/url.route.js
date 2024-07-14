const express = require('express');
const router = express.Router();
const handleGenerateNewShortURL = require('../controllers/url.controller.js');
const handleRedirect = require('../controllers/redirect.controller.js');
const getAnalytics=require("../controllers/analytics.controller.js")
router.post("/", handleGenerateNewShortURL);
router.get("/:shortid", handleRedirect);
router.get("/analytics/:shortid",getAnalytics)
module.exports = router;
