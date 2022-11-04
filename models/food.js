"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Food extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Food.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Name is required",
          },
          notEmpty: {
            msg: "Name is required",
          },
        },
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Price is required",
          },
          notEmpty: {
            msg: "Price is required",
          },
        },
      },
      rate: {
        type: DataTypes.FLOAT,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Rate is required",
          },
          notEmpty: {
            msg: "Rate is required",
          },
        },
      },
      imageUrl: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "ImageUrl is required",
          },
          notEmpty: {
            msg: "ImageUrl is required",
          },
        },
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Description is required",
          },
          notEmpty: {
            msg: "Description is required",
          },
        },
      },
      status: {
        type: DataTypes.TEXT,
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
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Quantity is required",
          },
          notEmpty: {
            msg: "Quantity is required",
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
      discount: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Discount is required",
          },
          notEmpty: {
            msg: "Discount is required",
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
    },
    {
      sequelize,
      modelName: "Food",
    }
  );
  return Food;
};
