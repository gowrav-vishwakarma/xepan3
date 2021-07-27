const express = require('express');
const router = express.Router();
const { User } = require('../../../models');


/* GET home page. */
router.post('/login', async function (req, res, next) {
  console.log(req);
  const user = await User.findOne({
    where: { username: req.body.username, password: req.body.password }
  }).catch(err => {
    console.log(err);
  })
  if (!user) {
    res.status(401).send("UnAuthenticated");
    return;
  }

  res.send({ user });
});

router.get('/user', function (req, res) {
  res.json({ number: Math.random() })
})

module.exports = router;
