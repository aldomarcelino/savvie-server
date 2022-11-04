'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Restaurant extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Restaurant.init({
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
    logoUrl: {
      type: DataTypes.STRING,
      allowNull: false,
        validate: {
          notNull: {
            msg: "LogoUrl is required",
          },
          notEmpty: {
            msg: "LogoUrl is required",
          },
        },
    },
    income: {
      type: DataTypes.INTEGER,
      allowNull: false,
        validate: {
          notNull: {
            msg: "Income is required",
          },
          notEmpty: {
            msg: "Income is required",
          },
        },
    },    
    type: {
      type: DataTypes.STRING,
      allowNull: false,
        validate: {
          notNull: {
            msg: "Type is required",
          },
          notEmpty: {
            msg: "Type is required",
          },
        },
    },
    is_open: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
        validate: {
          notNull: {
            msg: "Is_Open is required",
          },
          notEmpty: {
            msg: "Is_Open is required",
          },
        },
    },
    open_time: {
      type: DataTypes.TIME,
      allowNull: false,
        validate: {
          notNull: {
            msg: "Open_Time is required",
          },
          notEmpty: {
            msg: "Open_Time is required",
          },
        },
    },
    close_time: {
      type: DataTypes.TIME,
      allowNull: false,
        validate: {
          notNull: {
            msg: "Close_Time is required",
          },
          notEmpty: {
            msg: "Close_Time is required",
          },
        },
    },
    is_pickup: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
        validate: {
          notNull: {
            msg: "Is_Pickup is required",
          },
          notEmpty: {
            msg: "Is_Pickup is required",
          },
        },
    },
    is_delivery: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
        validate: {
          notNull: {
            msg: "Is_Delivery is required",
          },
          notEmpty: {
            msg: "Is_Delivery is required",
          },
        },
    },
    review_count: {
      type: DataTypes.INTEGER,
      allowNull: false,
        validate: {
          notNull: {
            msg: "Review_Count is required",
          },
          notEmpty: {
            msg: "Review_Count is required",
          },
        },
    },
    address: {
      type: DataTypes.TEXT,
      allowNull: false,
        validate: {
          notNull: {
            msg: "Address is required",
          },
          notEmpty: {
            msg: "Address is required",
          },
        },
    },
    longtitude: {
      type: DataTypes.FLOAT,
      allowNull: false,
        validate: {
          notNull: {
            msg: "Longtitude is required",
          },
          notEmpty: {
            msg: "Longtitude is required",
          },
        },
    },
    latitude: {
      type: DataTypes.FLOAT,
      allowNull: false,
        validate: {
          notNull: {
            msg: "Latitude is required",
          },
          notEmpty: {
            msg: "Latitude is required",
          },
        },
    },
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
    }
  }, {
    sequelize,
    modelName: 'Restaurant',
  });
  return Restaurant;
};