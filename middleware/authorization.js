const { Favourite } = require("../models");

const authorization = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { role, id: authorId } = req.user;
    const favourite = await Favourite.findByPk(id);
    if (!favourite) throw { name: "Not found", message: "Id not found" };

    if (role === "Staff" && Favourite.authorId === authorId) {
      next();
    } else if (role === "Admin") {
      next();
    } else {
      throw { name: "Forbidden", msg: "You have no access" };
    }
  } catch (error) {
    next(error);
  }
};

module.exports = authorization;
