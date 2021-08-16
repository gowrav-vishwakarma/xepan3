'use strict';

const mongoose = require("mongoose");

const InstalledAppSchema = new mongoose.Schema({
  name: {
    app: String,
  }
});

module.exports = mongoose.model('InstalledApp', InstalledAppSchema); // register model
