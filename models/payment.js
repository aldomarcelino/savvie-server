"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Payment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Payment.init(
    {
      deliveryFee: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: {
            msg: "DeliveryFee is required",
          },
          notEmpty: {
            msg: "DeliveryFee is required",
          },
        },
      },
      paid: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Paid is required",
          },
          notEmpty: {
            msg: "Paid is required",
          },
        },
      },
      status: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Status is required",
          },
          notEmpty: {
            msg: "Status is required",
          },
        },
      },
      orderCode: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Order Code is required",
          },
          notEmpty: {
            msg: "Order Code is required",
          },
        },
      },
      sales: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Sales is required",
          },
          notEmpty: {
            msg: "Sales is required",
          },
        },
      },
      active: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Active is required",
          },
          notEmpty: {
            msg: "Active is required",
          },
        },
      },
    },
    {
      sequelize,
      modelName: "Payment",
    }
  );
  return Payment;
};
