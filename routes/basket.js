const express = require("express");
const router = express.Router();
const Basket = require("../controllers/basket");

router.get("/", Basket.allBasket);
router.delete("/:id", Basket.createBasket);
router.delete("/:id", Basket.deleteBasket);
router.patch("/minus/:id", Basket.decrement)
router.patch("/plus/:id", Basket.increment)

module.exports = router;