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
      },
      FoodId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Basket",
    }
  );
  return Basket;
};
