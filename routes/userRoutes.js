const express = require("express");
const router = express.Router();
const userCtrl = require("../controllers/userController");
const { ensureUser } = require("../middleware/auth");

router.get("/user/dashboard", ensureUser, userCtrl.dashboard);
router.post("/user/book/:id", ensureUser, userCtrl.bookBike);
router.get("/user/profile", ensureUser, (req, res) => {
  res.render("profile", { user: req.session.user });
});


module.exports = router;


