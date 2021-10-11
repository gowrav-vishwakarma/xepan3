const path = require('path')
require('dotenv').config({ path: path.join(__dirname, '.env') })

const express = require('express')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const cors = require('cors')
const config = require('./config/config.js')

const webRouter = require('./routes/web')
const editorRouter = require('./routes/editor')

const app = express()
app.use((req, res, next) => {
  config.domain = 'www'
  next()
})

app.use(logger('dev'))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
// app.use(express.static(path.join(__dirname, 'public')))

app.use('/api/xepan/webbuilder/web-editor', editorRouter)
app.use('/api/xepan/webbuilder/web', webRouter)

module.exports = app

// export default {
//   path: '/api/web',
//   handler: app,
// }
