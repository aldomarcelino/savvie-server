const { Favourite, User, Food } = require("../models");

class Controller {
  static async allFavourite(req, res, next) {
    try {
      const favourite = await Favourite.findAll({
        include: [
          { model: User, attributes: { exclude: ["password"] } },
          { model: Food },
        ],
      });

      res.status(200).json({
        favourite,
      });
    } catch (error) {
      next(error);
    }
  }

  static async createFavourite(req, res, next) {
    const { id } = req.params;
    try {
      const food = await Food.findOne({
        where: { id },
      });
      if (!food) {
        throw { name: "Data not found" };
      }
      await Favourite.create({
        FoodId: id,
        UserId: req.user.id,
      });
      res.status(201).json({
        message: "Favourite success to create",
      });
    } catch (error) {
      console.log(error);
    }
  }

  static async deleteFavourite(req, res, next) {
    try {
      const { id } = req.params;
      const favourite = await Favourite.destroy({
        where: { id },
      });

      if (!favourite) throw { name: "Not found", msg: "Id not found" };

      res.status(200).json({
        message: `Favourite with id ${id} success to delete`,
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = Controller;
