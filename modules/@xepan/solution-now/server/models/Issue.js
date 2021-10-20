'use strict'

const mongoose = require('mongoose')

const IssueSchema = new mongoose.Schema({
  title: String,
  description: String,
  budget: {
    amount: Number,
    per: String,
    currency: String,
  },
  type: String,
  media: {},
  languages: [String],
  createdAt: { type: Date, default: Date.now },
  stack: [String],
  user: {},
})

module.exports = mongoose.model('Issue', IssueSchema) // register model
