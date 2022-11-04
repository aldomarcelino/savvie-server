const { Food, CategoryResto, User, Restaurant } = require("../models");

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

  static async createRestaurant(req, res, next) {
    try {
      const { id } = req.user;
      const {
        name,
        rate,
        logoUrl,
        income,
        type,
        is_open,
        open_time,
        close_time,
        is_pickup,
        is_delivery,
        review_count,
        address,
        longitude,
        latitude,
        UserId = id,
      } = req.body;
      const restaurant = await Restaurant.create({
        name,
        rate,
        logoUrl,
        income,
        type,
        is_open,
        open_time,
        close_time,
        is_pickup,
        is_delivery,
        review_count,
        address,
        longitude,
        latitude,
        UserId,
      });

      if (!restaurant) throw { name: "Not found", msg: "Id not found" };

      res.status(201).json({
        message: "Restaurant success to create",
        restaurant,
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = Controller;
