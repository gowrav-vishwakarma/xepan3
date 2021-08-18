require('dotenv').config()

const express = require('express')
const cookieParser = require('cookie-parser')
const logger = require('morgan')

const webRouter = require('./routes/web')
const editorRouter = require('./routes/editor')

const app = express()

app.use(logger('dev'))
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
