const express = require('express');
const router = express.Router();


router.get('/page-content', function (req, res) {
    const {WebPage}  = require('../models')
    WebPage.findOne({name: req.query.page },(err,r)=>{
        if(err) throw err;
        if(r) res.json(r.content);
        else {
            res.status(404).send({message:'WebPage Not found'});
        }
    })
})

module.exports = router;
