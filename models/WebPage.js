'use strict';

const mongoose = require("mongoose");

const WebPageSchema = new mongoose.Schema({
  name: {
    name: String,
    content: String,
  }
});

module.exports = mongoose.model('WebPages', WebPageSchema); // register model
