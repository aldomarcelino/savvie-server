"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class OrderItem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      OrderItem.belongsTo(models.Order);
      OrderItem.belongsTo(models.Food);
    }
  }
  OrderItem.init(
    {
      FoodId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      OrderId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      itemPrice: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Item Price is required",
          },
          notEmpty: {
            msg: "Item Price is required",
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
      modelName: "OrderItem",
    }
  );
  return OrderItem;
};
