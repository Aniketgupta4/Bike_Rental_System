const express = require("express");
const router = express.Router();
const bikeCtrl = require("../controllers/bikeController");

// home (list)
router.get("/", bikeCtrl.home);

// bike details
router.get("/bike/:id", bikeCtrl.details);

module.exports = router;
