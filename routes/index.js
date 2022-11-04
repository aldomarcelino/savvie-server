const express = require("express");
const router = express.Router();
const users = require("./user");
const restaurants = require("./restaurant");
const foods = require("./food");
const categorys = require("./category");
const categorysResto = require("./category-resto");
const favourites = require("./favourite");

router.use("/user", users);
router.use("/restaurants", restaurants);
router.use("/food", foods);
router.use("/categories", categorys);
router.use("/categoryresto", categorysResto);
router.use("/favorite", favourites);

module.exports = router;
