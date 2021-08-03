const fs = require('fs');
const express = require('express');
const router = express.Router();
const _ = require('lodash');
const vnatk = require('vnatk-express-sequelize');


// router.use(require('./middleware/adminTokenChecker'));

router.post('/page-content-save', async function (req, res) {
    const { WebPage } = require('../models')
    const page = await WebPage.findOne({
        where: { name: req.body.page }
    })
    if (page) {
        page.content = req.body.content;
        page.save().then(page => {
            res.send({ message: 'Page Saved' });
        }).catch(e => console.log(e));
    }
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
router.use('/vnatk', vnatk({ // "/vnatk" will be your base path where the system will hit for its APIs
    Models,
    router
}));


module.exports = router;
