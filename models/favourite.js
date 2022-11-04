"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Favourite extends Model {
    static associate(models) {
      Favourite.belongsTo(models.User);
      Favourite.belongsTo(models.Food);
    }
  }
  Favourite.init(
    {
      UserId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: {
            msg: "UserId is required",
          },
          notEmpty: {
            msg: "UserId is required",
          },
        },
      },
      FoodId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: {
            msg: "FoodId is required",
          },
          notEmpty: {
            msg: "FoodId is required",
          },
        },
      },
    },
    {
      sequelize,
      modelName: "Favourite",
    }
  );
  return Favourite;
};
