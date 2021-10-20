'use strict'

const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  username: String,
  password: String,
  roles: [],
  verification: {
    email: false,
    mobile: false,
    govtId: false,
    biometric: false,
  },
})

module.exports = mongoose.model('User', UserSchema) // register model
