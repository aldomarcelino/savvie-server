const express = require("express");
const router = express.Router();
const Favourite = require("../controllers/favourite");
const authentication = require("../middleware/authenticatoin");

router.use(authentication)
router.get("/", Favourite.allFavourite);
router.post("/", Favourite.createFavourite);
router.delete("/:id", Favourite.deleteFavourite);

module.exports = router;
