const express = require("express");
const router = express.Router();
const Resto = require("../controllers/resto");
const {authorizationResto} = require("../middleware/authorization");

router.get("/food/", Resto.showFood);
router.get("/food/:id", authorizationResto, Resto.detailFood);
router.post("/food/", Resto.addFood);
router.delete("/food/:id", authorizationResto, Resto.deleteFood);
router.put("/food/:id", authorizationResto, Resto.editFood);
router.patch("/food/food-status/:id", authorizationResto, Resto.statusFood);
router.patch("/food/food-active/:id", authorizationResto, Resto.activeFood);

router.put("/restaurants", Resto.editRestaurant)
router.delete("/restaurants", Resto.deleteRestaurant)

module.exports = router;