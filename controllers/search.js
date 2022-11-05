const { Op } = require('sequelize');
const {Food, Restaurant} = require('../models');

class Controller {
  static async search(req, res, next){
    try {
      let { name } = req.query
      let find = {}
      if (name) {
        find = {...find, name: {[Op.iLike]: `%${name}%`}};
      }
      const food = await Food.findAll({
        where: find
      })
      let restaurant = await Restaurant.findAll({
        where: find,
        include: [{
          model: Food,
          where: find
        }]
      })
      if(restaurant.length == 0) {
        restaurant = await Restaurant.findAll({
          where: find
        })
      }
      const data = {food, restaurant}
      res.status(200).json(data)
    } catch (error) {
      next(error)
    }
  }
}

module.exports = Controller