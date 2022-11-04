const { Job } = require("../models");

const authorization = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { role, id: authorId } = req.user;
    const job = await Job.findByPk(id);
    if (!job) throw { name: "Not found", msg: "Id not found" };

    if (role === "Staff" && job.authorId === authorId) {
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
