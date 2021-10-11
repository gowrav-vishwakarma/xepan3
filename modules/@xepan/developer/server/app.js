const path = require('path')
require('dotenv').config({ path: path.join(__dirname, '.env') })
const express = require('express')
const restify = require('express-restify-mongoose')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const cors = require('cors')

const app = express()

app.use(logger('dev'))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
const restifyRouter = express.Router()
const developerRoute = require('./routes/developer')
const models = require('./models')

for (const modelName in models) {
  if (['_connection', '_mongoose'].includes(modelName)) continue
  restify.serve(restifyRouter, models[modelName], {
    prefix: '/api/xepan/developer',
  })
}

app.use(restifyRouter)

app.use('/api/xepan/developer', developerRoute)

module.exports = app
