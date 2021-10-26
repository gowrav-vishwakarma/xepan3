'use strict'

const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  username: String,
  password: String,
  roles: [],
  verified:String,
  verification: {
    email: {code: String, verified: Boolean},
    mobile: {code: String, verified: Boolean},
    govtId: {verified: Boolean},
    biometric: {verified: Boolean},
  },
})

module.exports = mongoose.model('User', UserSchema) // register model