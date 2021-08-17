const express = require('express');
const router = express.Router();


router.get('/page-content', async function (req, res) {
    const {WebPage}  = require('../models')
    const doc = await WebPage.findOne({name: req.query.page },{content:1}).exec()
    // console.log('doc at '+req.query.page, doc, "doc.content ", doc.content);
    if(doc !== null)
        res.json(doc.content)
    else
        res.status(404).send({message:'WebPage Not found'});
})

module.exports = router;
