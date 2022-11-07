const express = require("express");
const router = express.Router();
const Xendit = require("../controllers/xendit");
const { authentication } = require("../middleware/authentication");

router.get('/success/:amount/:externalId', Xendit.success)
router.use(authentication)
router.post("/topup", Xendit.topUp);

module.exports = router;
