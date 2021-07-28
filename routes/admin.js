const express = require('express');
const router = express.Router();
const { User, xepanApps } = require('../models');


/* GET home page. */
router.post('/login', async function (req, res, next) {
  // console.log(req);
  const user = await User.findOne({
    where: { username: req.body.username, password: req.body.password }
  }).catch(err => {
    console.log(err);
  })
  if (!user) {
    res.status(401).send("UnAuthenticated");
    return;
  }

  res.send({ user, token: 'test' });
});

// PUT MIDDLEWARE HERE
router.get('/user', function (req, res) {
  res.send({ number: Math.random() });
});

router.get('/menus', function (req, res) {
  const path = require('path');
  const menus = { drawer: [], top: [] };
  xepanApps.forEach(xapp => {
    const menuPath = path.normalize(path.join(__dirname, '/../xepan-applications/', xapp, '/menus.js'));
    const m = require(menuPath);
    menus.drawer = menus.drawer.concat(m.drawer);
    menus.top = menus.top.concat(m.top);
  })
  res.send(menus);
})

module.exports = router;
