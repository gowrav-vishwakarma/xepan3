const express = require('express');
const router = express.Router();


router.get('/page-content', async function (req, res) {
    const { WebPage } = require('../models')
    const page = await WebPage.findOne({
        where: { name: req.query.page }
    });
    if (page) res.json(page.content);
    else
        res.status(404).json({ exec: 'NotFound' });
})

module.exports = router;
