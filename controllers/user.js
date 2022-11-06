const { comparePass } = require("../helpers/bcrypt");
const { createSign } = require("../helpers/jwt");
const { User, Restaurant, Balance, Sequelize } = require("../models");
const { OAuth2Client } = require("google-auth-library");

class Controller {
  static async myProfile(req, res, next) {
    try {
      const user = await User.findByPk(req.user.id, {
        include: [Restaurant],
      });
      res.status(200).json(user);
    } catch (error) {
      next(error);
    }
  }

  static async createUser(req, res, next) {
    try {
      const {
        email,
        password,
        fullName,
        phoneNumber,
        address,
        latitude,
        longitude,
      } = req.body;
      const user = await User.create({
        email,
        password,
        fullName,
        phoneNumber,
        address,
        location: Sequelize.fn(
          "ST_GeomFromText",
          `POINT(${latitude} ${longitude})`
        ),
      });
      await Balance.create({
        UserId: user.id,
        balance: 0,
      });

      res.status(201).json({
        message: "Create user successfully",
        user,
      });
    } catch (error) {
      next(error);
    }
  }

  static async userLogin(req, res, next) {
    try {
      const { email, password } = req.body;
      if (!email) {
        throw { name: "Email is required" };
      }
      if (!password) {
        throw { name: "Password is required" };
      }
      const user = await User.findOne({
        where: { email },
        include: [Restaurant],
      });
      if (!user)
        throw { name: "Login failed", msg: "Invalid email or password" };

      const validPass = comparePass(password, user.password);
      if (!validPass)
        throw { name: "Login failed", msg: "Invalid email or password" };

      const token = createSign(
        { id: user.id, email: user.email, role: user.role },
        process.env.SECRET_KEY
      );
      if (!user.Restaurant) {
        res.status(200).json({
          message: "User logged in successfully",
          access_token: token,
          user: user.username,
          role: user.role,
          id: user.id,
        });
      } else {
        res.status(200).json({
          message: "User logged in successfully",
          access_token: token,
          user: user.username,
          role: user.role,
          id: user.id,
          restoId: user.Restaurant.id,
        });
      }
    } catch (error) {
      next(error);
    }
  }

  static async userGoogleLogin(req, res, next) {
    try {
      const { jwt } = req.body;
      const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
      const ticket = await client.verifyIdToken({
        idToken: jwt,
        audience: process.env.GOOGLE_CLIENT_ID,
      });
      const payload = ticket.getPayload();

      const [user, isCreated] = await User.findOrCreate({
        where: {
          email: payload.email,
        },
        defaults: {
          email: payload.email,
          username: payload.name,
          password: "123456",
          phoneNumber: "0834242234",
          address: "Jakarta",
          role: "Staff",
        },
        hooks: false,
      });

      const token = createSign(
        { id: user.id, email: user.email, role: user.role },
        process.env.SECRET_KEY
      );

      const statusCode = isCreated ? 201 : 200;
      res.status(statusCode).json({
        statusCode,
        msg: "User logged in successfully",
        role: "Staff",
        id: user.id,
        access_token: token,
        user: user.username,
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = Controller;
