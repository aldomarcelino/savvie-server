const { Basket, Food } = require("../models");

class Controller {
  static async allBasket(req, res, next) {
    try {
      const basket = await Basket.findAll({
        include: [Food]
      });

      res.status(200).json(basket);
    } catch (error) {
      next(error);
    }
  }
  static async createBasket(req, res, next){
    try {
      const { FoodId } = req.body;
      const data = await Basket.create({
        FoodId,
        UserId: req.user.id
      });
      res.status(201).json(data);
    } catch (error) {
      next(error);
    }
  }
  static async deleteBasket(req, res, next){
    try {
      const findData = await Basket.findByPk(req.params.id);
      if (!findData) throw { name: "Not found" };
      await Basket.destroy({where: {id: req.params.id}});
      res.status(200).json({message: `Basket with id ${req.params.id} success to delete`});
    } catch (error) {
      next(error);
    }
  }
  static async increment(req, res, next){
    try {
      const findData = await Basket.findByPk(req.params.id);
      if (!findData) throw { name: "Not found" };
      await Basket.increment('quantity', {by: 1},{where: {id: req.params.id}});
      res.status(200).json({message: `Basket with id ${req.params.id} successfully increment `});
    } catch (error) {
      next(error);
    }
  }
  static async decrement(req, res, next){
    try {
      const findData = await Basket.findByPk(req.params.id);
      if (!findData) throw { name: "Not found" };
      await Basket.increment('quantity', {by: -1},{where: {id: req.params.id}});
      res.status(200).json({message: `Basket with id ${req.params.id} successfully decrement`});
    } catch (error) {
      next(error);
    }
  }
}

module.exports = Controller;
