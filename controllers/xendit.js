const XenditInvoice = require('../api/xendit');
const { User, Balance, sequelize } = require('../models');

class Controller {
  static async topUp (req, res, next) {
    try {
        const t = await sequelize.transaction()
        const { balance } = req.body
        const { id } = req.user
        const findUser = await User.findByPk(id, {
            include:[Balance]
        })
        const findWallet = await Balance.findOne({
            where: {
                UserId : findUser.id
            }
        }, { transaction : t })
        const xenditInvoice = await XenditInvoice.createInvoice(findUser.id+'', balance, findUser)
        await Balance.update({
            balance : +findWallet.balance + +balance
        }, {
            where: {
                UserId: findUser.id
            }
        }, { transaction: t })
        res.status(200).json({
            code: 200,
            status: 'success',
            message: 'please pay to continue',
            data : xenditInvoice.invoice_url
        })
    } catch (error) {
        next(error)
    }
  }
}

module.exports = Controller