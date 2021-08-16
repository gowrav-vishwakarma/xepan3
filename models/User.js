'use strict';

'use strict';

const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    username: String,
    password: String,
    roles:[]
});

module.exports = mongoose.model('User', UserSchema); // register model