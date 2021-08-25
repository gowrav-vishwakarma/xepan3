require('dotenv').config()
const express = require('express')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const cors = require('cors')

const indexRouter = require('./routes/index')
const adminRouter = require('./routes/admin')
const usersRouter = require('./routes/users')

const app = express()

app.use(logger('dev'))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
// app.use(express.static(path.join(__dirname, 'public')))

app.use('/api/xepan/core', indexRouter)
app.use('/api/xepan/core/users', usersRouter)
app.use('/api/xepan/core/admin', adminRouter)

module.exports = app
