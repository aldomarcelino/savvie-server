"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class CategoryResto extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
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
