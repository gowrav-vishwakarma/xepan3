const fs = require('fs');
const express = require('express');
const router = express.Router();
const _ = require('lodash');


// router.use(require('./middleware/adminTokenChecker'));

router.post('/page-content-save', async function (req, res) {
    const { WebPage } = require('../models')
    console.log('req.body.page',req.body.page);
    console.log('req.body.content',req.body.content);
    console.log('typeof req.body.content',typeof req.body.content);
    const docs = await WebPage.findOneAndUpdate({name: req.body.page},{content: req.body.content},{new: true,  strict: false }).catch(err=>{throw err});
    res.send({ docs });
})

router.get('/tools', function (req, res) {
    const path = require('path');
    let tools = {};
    const toolsPath = [path.join(__dirname, '/../web-tools/index.js').toString()];
    Models.xepanApps.forEach(xapp => {
        const toolPath = path.normalize(path.join(__dirname, '/../xepan-applications/', xapp, '/web-tools.js'));
        if (fs.existsSync(toolPath)) {
            toolsPath.push(toolPath);
        }
    })
    toolsPath.forEach(tp => {
        const t = require(tp);
        tools = _.merge(tools, t);
    })

    res.send(tools);
})

const Models = require('../models');

module.exports = router;
