const express = require("express");
const router = express.Router();
const Favourite = require("../controllers/favourite");

router.get("/", Favourite.allFavourite);
router.post("/", Favourite.createFavourite);
router.delete("/:id", Favourite.deleteFavourite);

module.exports = router;
