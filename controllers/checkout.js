const {OrderItem, Payment} = require('../models');

class Controller{
  static async createCheckout(req, res, next){
    try {

    } catch (error) {
      
    }
  }
  static async allOrder(req, res, next){
    try {
      const data = await OrderItem.findAll({
        include: [{
          model: Payment,
          where: {UserId: req.user.id}
        }]
      })
      res.status(200).json(data)
    } catch (error) {
      next(error)
    }
  }
}
module.exports = Controller