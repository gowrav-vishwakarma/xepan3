'use strict';

const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(path.join(__dirname, '/../config/config.js'))[env];
const db = {};

mongoose.set('debug', true);

db._mongoose = mongoose;
mongoose.connect('mongodb://localhost/'+config.database,{ useUnifiedTopology: true, useFindAndModify:false,  useNewUrlParser: true  });
db._connection = mongoose.connection;

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))
    db[file.split('.')[0]] = model;
  });


db.xepanApps = ['xepan'];

db.xepanApps.map(app => {
  // Read All Models from _base+ installedApps
  const modelfolders = path.normalize(path.join(__dirname, '/../xepan-applications/', app, '/models/'));
  fs
    .readdirSync(modelfolders)
    .filter(file => {
      return (file.indexOf('.') !== 0) && (file !== 'index.js') && (file.slice(-3) === '.js');
    })
    .forEach(file => {
      const model = require(path.join(__dirname, file))
      db[app+'_'+file.split('.')[0]] = model;
    });
  return modelfolders;
})

module.exports = db;
