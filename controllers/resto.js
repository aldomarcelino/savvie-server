const {Food} = require("../models")

class Controller{
  static async showFood(req, res, next){
    try {
      let data = await Food.findAll({
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
      let findData = await Food.findByPk(req.params.id);
      if (!findData) throw { name: "Food Not Found" };
      res.status(200).json(data)
    } catch (error) {
      next(error)
    }
  }
  static async addFood(req, res, next){
    try {
      let { name, price, rate, imageUrl, description, status, quantity, sales, discount, CategoryId } = req.body;
      let data = await Food.create({
        name,
        price,
        rate,
        role,
        imageUrl,
        description,
        status,
        quantity,
        sales,
        discount,
        CategoryId,
        RestaurantId: req.user.restoId
      });
      res.status(201).json(data);
    } catch (err) {
      next(err);
    }
  }
  static async deleteFood(req, res, next){
    try {
      let findData = await Food.findByPk(req.params.id);
      if (!findData) throw { name: "Food Not Found" };
      let data = await Food.destroy(req.params.id);
      res.status(200).json(data);
    } catch (err) {
      next(err);
    }
  }
  static async editFood(req, res, next){
    try {
      let findData = await Food.findByPk(req.params.id);
      if (!findData) throw { name: "Food Not Found" };
      let { username, email, password, phoneNumber, address } = req.body;
      let data = await Food.update({
        username,
        email,
        password,
        role,
        phoneNumber,
        address,
      }, {where: {id: req.params.id}});
      res.status(200).json(data);
    } catch (err) {
      next(err);
    }
  }
  static async statusFood(req, res, next){
    try {
      let findData = await Food.findByPk(req.params.id);
      if (!findData) throw { name: "Food Not Found" };
      let {status} = req.body
      await Food.update({status}, {where: {id: req.params.id}})
      res.status(200).json({msg: "Update status success"});
    } catch (err) {
      next(err);
    }
  }
  static async activeFood(req, res, next){
    try {
      let findData = await Food.findByPk(req.params.id);
      if (!findData) throw { name: "Food Not Found" };
      let {isActive} = req.body
      await Food.update({isActive}, {where: {id: req.params.id}})
      res.status(200).json({msg: "Update status success"});
    } catch (err) {
      next(err);
    }
  }
}
module.exports = Controller