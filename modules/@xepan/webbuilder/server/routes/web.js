const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')

router.get('/page-content', async function (req, res) {
  const { WebPage } = require('../models')
  const doc = await WebPage.findOne(
    { name: req.query.page },
    { content: 1, allowedTo: 1, loginPage: 1 }
  ).exec()
  // console.log('doc at '+req.query.page, doc, "doc.content ", doc.content);
  if (doc && doc.allowedTo && !doc.allowedTo.includes(-1)) {
    const authHeader = req.get('Authorization')
    let decodedToken = {}
    let allowed = true
    if (authHeader) {
      const token = authHeader.split(' ')[1]
      try {
        decodedToken = jwt.verify(token, process.env.JWT_SECRET || 'secret')
        allowed = doc.allowedTo.some((r) => decodedToken.roles.includes(r))
      } catch (err) {
        allowed = false
      }
    }

    if (!allowed) {
      res.status(402).send({ message: 'Not Authorised' })
      return
    }
  }

  if (doc !== null) res.json(doc.content)
  else res.status(404).send({ message: 'WebPage Not found' })
})

module.exports = router
