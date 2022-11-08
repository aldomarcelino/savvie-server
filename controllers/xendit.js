const XenditInvoice = require("../api/xendit");
const { User, Balance, sequelize } = require("../models");

class Controller {
  static async topUp(req, res, next) {
    const t = await sequelize.transaction();
    try {
      const { balance } = req.body;
      const { id } = req.user;
      const findUser = await User.findByPk(id, {
        include: [Balance],
      });
      const xenditInvoice = await XenditInvoice.createInvoice(
        findUser.id + "",
        balance,
        findUser
      );
      await t.commit();
      res.status(200).json({
        code: 200,
        status: "success",
        message: "please pay to continue",
        data: xenditInvoice.invoice_url,
      });
    } catch (error) {
      await t.rollback();
      next(error);
    }
  }
  static async success(req, res, next) {
    try {
    //   console.log(req.body)
      const findUser = await User.findByPk(externalId, {
        include: [Balance],
      });
    //   console.log(findUser);
      const findWallet = await Balance.findOne({
        where: {
          UserId: findUser.id,
        },
      });
    //   console.log(findWallet);
      await Balance.update(
        {
          balance: +findWallet.balance + +amount,
        },
        {
          where: {
            UserId: findUser.id,
          },
        }
      );
      res.status(201).json({ message: "topup success" });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = Controller;
