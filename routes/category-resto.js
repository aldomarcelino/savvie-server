const express = require("express");
const router = express.Router();
const Resto = require("../controllers/category-resto");

router.get("/", Resto.allCategoryResto);
router.get("/:id", Resto.getCategoryRestoById);

module.exports = router;
