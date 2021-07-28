'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class InstalledApp extends Model {
        static associate(models) { }
    }
    InstalledApp.init(
        {
            app: DataTypes.STRING
        },
        {
            sequelize,
            modelName: 'InstalledApp',
        }
    );
    return InstalledApp;
};
