'use strict'

const fs = require('fs')
const path = require('path')
const mongoose = require('mongoose')
const basename = path.basename(__filename)
const env = process.env.NODE_ENV || 'development'
const config = require(path.join(__dirname, '/../config/config.js'))
const db = {}

console.log('connecting', 'mongodb://localhost/xepan3_' + config.domain)

env === 'development' && mongoose.set('debug', true)

db._mongoose = mongoose
mongoose.connect('mongodb://localhost/xepan3_' + config.domain, {
  useUnifiedTopology: true,
  useFindAndModify: false,
  useNewUrlParser: true,
})

db._connection = mongoose.connection

fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js'
    )
  })
  .forEach((file) => {
    const model = require(path.join(__dirname, file))
    db[file.split('.')[0]] = model
  })

module.exports = db
