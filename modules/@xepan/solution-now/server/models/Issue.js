'use strict'

const mongoose = require('mongoose')

const IssueSchema = new mongoose.Schema({
  title: String,
})

module.exports = mongoose.model('Issue', IssueSchema) // register model
