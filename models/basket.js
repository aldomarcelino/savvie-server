"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Basket extends Model {
    static associate(models) {
      Basket.belongsTo(models.User);
      Basket.belongsTo(models.Food);
    }
  }
  Basket.init(
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
      comition: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Comition is required",
          },
          notEmpty: {
            msg: "Comition is required",
          },
        },
      },
    },
    {
      sequelize,
      modelName: "Basket",
    }
  );
  return Basket;
};
