const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')
const _ = require('lodash')
const { User } = require('../models')

/* GET home page. */
router.post('/login', async function (req, res, next) {
  console.log(req)
  const user = await User.findOne({
    username: req.body.username,
    password: req.body.password,
  }).catch((err) => {
    throw err
  })

  console.log('user', user)
  if (!user) {
    res.status(401).send('UnAuthenticated')
    return
  }
  const token = jwt.sign(user.toJSON(), process.env.JWT_SECRET || 'secret', {
    expiresIn: process.env.JWT_TOKENLIFE || '365d',
  })
  res.send({ user, token })
})

// PUT MIDDLEWARE HERE
router.get('/user', async function (req, res) {
  const authHeader = req.headers.authorization

  const token =
    req.body.token ||
    req.query.token ||
    req.headers['x-access-token'] ||
    (authHeader && authHeader.split(' ')[1]) ||
    (req.cookies['auth._token.adminlogin'] &&
      req.cookies['auth._token.adminlogin'].replace('Bearer ', ''))

  await jwt.verify(
    token,
    process.env.JWT_SECRET || 'secret',
    async function (err, decoded) {
      if (err) {
        throw err
      }
      const user = await User.findOne({
        _id: decoded._id,
      }).catch((err) => {
        console.log(err)
      })
      if (!user) {
        res.status(401).send('UnAuthenticated')
        return
      }
      res.send({ user: user.toJSON() })
      // res.send({ user: decoded });
    }
  )
})

router.get('/menus', function (req, res) {
  let menus = { drawer: {}, topmenu: {}, usermenu: {} }
  const menusPath = []
  menusPath.forEach((p) => {
    const m = require(p)
    menus = _.merge(menus, m)
  })
  res.send(menus)
})

module.exports = router
