const express = require("express");
const router = express.Router();
const adminCtrl = require("../controllers/adminController");
const { ensureAdmin } = require("../middleware/auth");

// NEW — Cloudinary Multer import
const upload = require("../config/upload");   // we created this file earlier

router.get("/admin/dashboard", ensureAdmin, adminCtrl.dashboard);

router.get("/admin/add-bike", ensureAdmin, adminCtrl.addBikePage);
router.post("/admin/add-bike", ensureAdmin, upload.single("image"), adminCtrl.addBike);

router.get("/admin/edit-bike/:id", ensureAdmin, adminCtrl.editBikePage);
router.post("/admin/edit-bike/:id", ensureAdmin, upload.single("image"), adminCtrl.updateBike);

router.post("/admin/delete-bike/:id", ensureAdmin, adminCtrl.deleteBike);

router.get("/admin/approve/:id", ensureAdmin, adminCtrl.approveBooking);
router.get("/admin/reject/:id", ensureAdmin, adminCtrl.rejectBooking);

module.exports = router;
