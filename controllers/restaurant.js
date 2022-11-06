const {
  Food,
  CategoryResto,
  User,
  Restaurant,
  sequelize,
} = require("../models");

class Controller {
  static async allRestaurant(req, res, next) {
    try {
      const restaurant = await Restaurant.findAll({
        include: [
          { model: User, attributes: { exclude: ["password"] } },
          { model: CategoryResto },
          { model: Food },
        ],
      });

      res.status(200).json(restaurant);
    } catch (error) {
      next(error);
    }
  }

  static async getRestaurantById(req, res, next) {
    try {
      const { id } = req.params;
      const restaurant = await Restaurant.findOne({
        where: { id },
        include: [
          { model: User, attributes: { exclude: ["password"] } },
          { model: CategoryResto },
          { model: Food },
        ],
      });

      if (!restaurant) throw { name: "Not found", msg: "Id not found" };

      res.status(200).json(restaurant);
    } catch (error) {
      next(error);
    }
  }

  static async getRestaurantByRadius(req, res) {
    try {
      const distance = req.query.distance || 1500;
      const long = req.query.long || "-6.9439994342171225";
      const lat = req.query.lat || "107.5904275402039";
      const result = await sequelize.query(
        `select
        id,
        name,
        location
      from
        "Restaurants"
      where
        ST_DWithin(location,
        ST_MakePoint(:lat,
        :long),
        :distance,
      true) = true;`,
        {
          replacements: {
            distance: +distance,
            long: parseFloat(long),
            lat: parseFloat(lat),
          },
          logging: console.log,
          plain: false,
          raw: false,
          type: sequelize.QueryTypes.SELECT,
        }
      );
      res.status(200).json(result);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  }
}

module.exports = Controller;
