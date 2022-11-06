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

  
}

module.exports = Controller;
