const express = require("express");
const router = express.Router();
const users = require("./user");
const restaurants = require("./restaurant");
const foods = require("./food");
const categorys = require("./category");
const favourites = require("./favourite");
const resto = require("./resto");
const basket = require("./basket");
const search = require("./search");
const xendit = require("./xendit");
const midtrans = require("./midtrans");
const {authenticationResto} = require("../middleware/authentication");

router.use("/", users);
router.use("/restaurants", restaurants);
router.use("/food", foods);
router.use("/categories", categorys);
router.use("/favorites", favourites);
router.use("/search", search)
router.use("/basket", basket)
router.use("/xendit", xendit)
router.use("/midtrans", midtrans)

router.use(authenticationResto);
router.use("/resto", resto);

module.exports = router;
