const express = require("express");
const router = express.Router();
const Restaurant = require("../controllers/restaurant");

router.get("/", Restaurant.allRestaurant);
router.get("/:id", Restaurant.getRestaurantById);

module.exports = router;
