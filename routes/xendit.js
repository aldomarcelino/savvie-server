const express = require("express");
const router = express.Router();
const Xendit = require("../controllers/xendit");
const { authentication } = require("../middleware/authentication");

router.get('/success', (req, res) => {
  res.status(200).json({
      message: "success"
  })
})
router.use(authentication)
router.post("/topup", Xendit.topUp);

module.exports = router;
