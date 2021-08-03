'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class WebPage extends Model {
        static associate(models) { }
    }
    WebPage.init(
        {
            name: DataTypes.STRING,
            content: DataTypes.JSON
        },
        {
            sequelize,
            modelName: 'WebPage',
        }
    );
    return WebPage;
};
