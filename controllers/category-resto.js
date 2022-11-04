const { Category, CategoryResto } = require("../models");

class Controller {
  static async allCategoryResto(req, res, next) {
    try {
      const categoryResto = await CategoryResto.findAll({
        include: [{ model: Category }],
      });

      res.status(200).json({
        categoryResto,
      });
    } catch (error) {
      next(error);
    }
  }

  static async getCategoryRestoById(req, res, next) {
    try {
      const { id } = req.params;
      const categoryResto = await CategoryResto.findOne({
        where: { id },
        include: [{ model: Category }],
      });

      if (!categoryResto) throw { name: "Not found", msg: "Id not found" };

      res.status(200).json({
        categoryResto,
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = Controller;
