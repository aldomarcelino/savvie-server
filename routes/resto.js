const express = require("express");
const router = express.Router();
const Resto = require("../controllers/resto");
const {authorizationResto} = require("../middleware/authorization");

router.get("/", Resto.showFood);
router.get("/:id", authorizationResto, Resto.detailFood);
router.post("/", Resto.addFood);
router.delete("/:id", authorizationResto, Resto.deleteFood);
router.put("/:id", authorizationResto, Resto.editFood);
router.patch("/food-status/:id", authorizationResto, Resto.statusFood);
router.patch("/food-active/:id", authorizationResto, Resto.activeFood);

module.exports = router;