'use strict';

const mongoose = require("mongoose");

const WebPageSchema = new mongoose.Schema({
  name: String,
  content: Array,
});

module.exports = mongoose.model('WebPage', WebPageSchema); // register model
