const express = require('express');
const router = express.Router();


router.get('/page-content', function (req, res) {
    const { WebPage } = require('../models')
    console.log('req.query', req.query);
    WebPage.findOne({
        where: { name: req.query.page }
    })
        .then(page => {
            if (page) res.json(page.content);
            else
                res.send(null);
        })
})

module.exports = router;
