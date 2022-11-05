const express = require("express");
const router = express.Router();
const User = require("../controllers/user");
const { authentication } = require("../middleware/authentication");

router.post("/signin", User.userLogin);
router.post("/singin-with-google", User.userGoogleLogin);
router.post("/signup", User.createUser);

router.use(authentication)
router.get("/", User.myProfile);

module.exports = router;
