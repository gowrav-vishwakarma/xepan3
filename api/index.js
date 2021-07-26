// api/index.js

const express = require('express')

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/test', function (req, res) {
    res.json({ number: Math.random() })
})


export default {
    path: '/api',
    handler: app
}