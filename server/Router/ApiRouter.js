const express = require("express");
const router = express.Router();

router.use("/test", require("../Controllers/TestController.js"));
router.use("/user", require("../Controllers/UserController.js"));

module.exports = router;
