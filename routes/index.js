const express = require("express");
const router = express.Router();
const users = require("./user");
const restaurants = require("./restaurant");
const foods = require("./food");
const categorys = require("./category");
const categorysResto = require("./category-resto");
const favourites = require("./favourite");

router.use("/user", users);
router.use("/restaurant", restaurants);
router.use("/food", foods);
router.use("/category", categorys);
router.use("/resto", categorysResto);
router.use("/favourite", favourites);

// 


module.exports = router;
