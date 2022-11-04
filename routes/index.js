const express = require("express");
const router = express.Router();
const users = require("./user");
const restaurants = require("./restaurant");
const foods = require("./food");
const categorys = require("./category");
const favourites = require("./favourite");
const resto = require("./resto");
const authentication = require("../middleware/authenticatoin");

router.use("/user", users);
router.use("/restaurants", restaurants);
router.use("/food", foods);
router.use("/categories", categorys);
router.use("/favorite", favourites);

router.use(authentication)
router.use("/resto/food", resto)


module.exports = router;
