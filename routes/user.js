const express = require("express");
const router = express.Router();
const User = require("../controllers/user");

router.post("/signin", User.userLogin);
router.post("/singin-with-google", User.userGoogleLogin);
router.post("/signup", User.createUser);
router.get("/", User.allUser);

module.exports = router;
