const express = require("express");
const router = express.Router();
const users = require("./user");
const restaurants = require("./restaurant");
const foods = require("./food");
const categorys = require("./category");
const favourites = require("./favourite");
const resto = require("./resto");
const search = require("./search");
const {authenticationResto} = require("../middleware/authentication");

router.use("/", users);
router.use("/restaurants", restaurants);
router.use("/food", foods);
router.use("/categories", categorys);
router.use("/favorites", favourites);
router.use("/search", search)

router.use(authenticationResto);
router.use("/resto/food", resto);

module.exports = router;
