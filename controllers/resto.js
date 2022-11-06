const {Food, Restaurant} = require("../models")

class Controller{
  static async showFood(req, res, next){
    try {
      const data = await Food.findAll({
        where: {
          RestaurantId: req.user.restoId
        }
      })
      res.status(200).json(data)
    } catch (error) {
      next(error)
    }
  }
  static async detailFood(req, res, next){
    try {
      const data = await Food.findByPk(req.params.id);
      if (!data) throw { name: "Not found" };
      res.status(200).json(data)
    } catch (error) {
      next(error)
    }
  }
  static async addFood(req, res, next){
    try {
      const { name, price, imageUrl, description, quantity, CategoryId } = req.body;
      const data = await Food.create({
        name,
        price,
        rate: 0,
        imageUrl,
        description,
        status: "new",
        quantity,
        sales: 0,
        discount: 0,
        is_active: true,
        CategoryId,
        isActive: true,
        RestaurantId: req.user.restoId
      });
      res.status(201).json(data);
    } catch (error) {
      next(error);
    }
  }
  static async deleteFood(req, res, next){
    try {
      const findData = await Food.findByPk(req.params.id);
      if (!findData) throw { name: "Not found" };
      await Food.destroy({where: {id: req.params.id}});
      res.status(200).json({message: `Food with id ${req.params.id} success to delete`});
    } catch (error) {
      next(error);
    }
  }
  static async editFood(req, res, next){
    try {
      const findData = await Food.findByPk(req.params.id);
      if (!findData) throw { name: "Not found" };
      const { name, price, rate, imageUrl, description, quantity, sales, discount, CategoryId } = req.body;
      await Food.update({
        name,
        price,
        rate,
        imageUrl,
        description,
        quantity,
        sales,
        discount,
        CategoryId
      }, {where: {id: req.params.id}});
      res.status(200).json({message: `Food with id ${req.params.id} edited success`});
    } catch (error) {
      next(error);
    }
  }
  static async statusFood(req, res, next){
    try {
      const findData = await Food.findByPk(req.params.id);
      if (!findData) throw { name: "Not found" };
      const {status} = req.body
      await Food.update({status}, {where: {id: req.params.id}})
      res.status(200).json({message: "Update status success"});
    } catch (error) {
      next(error);
    }
  }
  static async activeFood(req, res, next){
    try {
      const findData = await Food.findByPk(req.params.id);
      if (!findData) throw { name: "Not found" };
      const {isActive} = req.body
      await Food.update({isActive}, {where: {id: req.params.id}})
      res.status(200).json({message: "Update status success"});
    } catch (error) {
      next(error);
    }
  }


  static async myRestaurant(req, res, next) {
    try {
      const data = await Restaurant.findByPk(req.user.id);
      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  }
  static async editRestaurant(req, res, next){
    try {
      const { name, type, logoUrl, description, is_open, open_time, close_time, is_pickup, is_delivery, address, longitude, latitude } = req.body;
      await Restaurant.update({
        name,
        type,
        logoUrl,
        description,
        is_open,
        open_time,
        close_time,
        is_pickup, 
        is_delivery, 
        address, 
        longitude, 
        latitude
      }, {where: {UserId: req.user.id}});
      res.status(200).json({message: `Restaurant with id ${req.user.id} edited success`});
    } catch (error) {
      next(error);
    }
  }

  static async deleteRestaurant(req, res, next){
    try {
      await Restaurant.destroy({where: {UserId: req.user.id}});
      res.status(200).json({message: `Restaurant with id ${req.user.id} success to delete`});
    } catch (error) {
      next(error);
    }
  }
}
module.exports = Controller