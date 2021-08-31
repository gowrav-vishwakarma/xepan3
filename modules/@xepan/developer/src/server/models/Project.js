'use strict'

const mongoose = require('mongoose')

const ApplicationSchema = new mongoose.Schema({
  name: String,
  hasWebPages: Boolean,
  hasWebComponents: Boolean,
  hasApiService: Boolean,
  apiServiceFramework: {
    type: String,
    enum: ['express.js'],
  },
  database: {
    type: String,
    enum: ['MySQl-Sequelize', 'MongoDb-Mongoose'],
  },
  status: {
    type: String,
    enum: ['Active', 'InActive'],
  },
})

const ProjectSchema = new mongoose.Schema({
  name: String,
  status: {
    type: String,
    enum: ['Active', 'InActive'],
  },
  applications: [ApplicationSchema],
})

module.exports = mongoose.model('Project', ProjectSchema) // register model
