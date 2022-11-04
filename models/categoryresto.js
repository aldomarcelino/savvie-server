"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class CategoryResto extends Model {
    static associate(models) {
      CategoryResto.belongsTo(models.Category);
    }
  }
  CategoryResto.init(
    {
      RestaurantId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: {
            msg: "RestaurantId is required",
          },
          notEmpty: {
            msg: "RestaurantId is required",
          },
        },
      },
      CategoryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: {
            msg: "CategoryId is required",
          },
          notEmpty: {
            msg: "CategoryId is required",
          },
        },
      },
    },
    {
      sequelize,
      modelName: "CategoryResto",
    }
  );
  return CategoryResto;
};
