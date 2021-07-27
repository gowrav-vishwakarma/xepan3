const path = require('path');
const fs = require('fs');
const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

const { xepanApps } = require('./models');
// Read all routes
for (let index = 0; index < xepanApps.length; index++) {
    const f = xepanApps[index];
    const routesfolders = path.normalize(path.join(__dirname, '/xepan-applications/', f, '/routes'));
    // console.log('working for ', f);
    const routeFiles = fs
        .readdirSync(routesfolders)
        .filter(file => {
            return (file.indexOf('.') !== 0) && (file !== 'index.js') && (file.slice(-3) === '.js');
        });
    for (let index = 0; index < routeFiles.length; index++) {
        const file = routeFiles[index];
        // console.log('working for ', file);
        console.log('adding route', '/' + f + '/' + file.replace('.js', ''), path.join(routesfolders, file));
        app.use('/' + f + '/' + file.replace('.js', ''), require(path.join(routesfolders, file)));
    }
}

console.log('exporting');
module.exports = app;


export default {
    path: '/api',
    handler: app
}
