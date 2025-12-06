const express = require("express");
const multer = require("multer");
const path = require("path");
const router = express.Router();
const adminCtrl = require("../controllers/adminController");
const { ensureAdmin } = require("../middleware/auth");

// multer setup
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "public/uploads"),
  filename: (req, file, cb) => cb(null, Date.now() + path.extname(file.originalname))
});
const upload = multer({ storage });

router.get("/admin/dashboard", ensureAdmin, adminCtrl.dashboard);

router.get("/admin/add-bike", ensureAdmin, adminCtrl.addBikePage);
router.post("/admin/add-bike", ensureAdmin, upload.single("image"), adminCtrl.addBike);

router.get("/admin/edit-bike/:id", ensureAdmin, adminCtrl.editBikePage);
router.post("/admin/edit-bike/:id", ensureAdmin, upload.single("image"), adminCtrl.updateBike);

router.post("/admin/delete-bike/:id", ensureAdmin, adminCtrl.deleteBike);

router.get("/admin/approve/:id", ensureAdmin, adminCtrl.approveBooking);
router.get("/admin/reject/:id", ensureAdmin, adminCtrl.rejectBooking);

module.exports = router;
