const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');
//create tags
class Tag extends Model {}

Tag.init(
  {
    // define columns
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  }
);

module.exports = Tag;
