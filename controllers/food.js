const {
  Food,
  Category,
  Restaurant,
  Favourite,
  Basket,
  OrderItem,
} = require("../models");

class Controller {
  static async allFood(req, res, next) {
    try {
      const food = await Food.findAll({
        include: [{ model: Category }, { model: Restaurant }],
      });

      res.status(200).json({
        food,
      });
    } catch (error) {
      next(error);
    }
  }

  static async getFoodById(req, res, next) {
    try {
      const { id } = req.params;
      const food = await Food.findOne({
        where: { id },
        include: [
          { model: User, attributes: { exclude: ["password"] } },
          { model: Category },
          { model: Restaurant },
          { model: Favourite },
          { model: Basket },
          { model: OrderItem },
        ],
      });

      if (!food) throw { name: "Not found", msg: "Id not found" };

      res.status(200).json({
        food,
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = Controller;
