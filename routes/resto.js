const express = require("express");
const router = express.Router();
const Resto = require("../controllers/resto");
const authorization = require("../middleware/authorization");

router.get("/", Resto.showFood);
router.get("/:id", Resto.detailFood);
router.post("/", Resto.addFood);
router.delete("/:id", authorization, Resto.deleteFood);
router.put("/:id", authorization, Resto.editFood);
router.patch("/:id", authorization, Resto.statusFood);
router.patch("/:id", authorization, Resto.activeFood);

module.exports = router;
