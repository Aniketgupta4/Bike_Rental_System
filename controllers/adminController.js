const Bike = require("../models/Bike");
const Booking = require("../models/Booking");

// Admin Dashboard
exports.dashboard = async (req, res) => {
  try {
    const bookings = await Booking.find().populate("user").populate("bike").sort({ createdAt: -1 });
    const bikes = await Bike.find();
    res.render("adminDashboard", {
      bookings: bookings || [],
      bikes: bikes || [],
      user: req.session.user || null
    });
  } catch (err) {
    console.error(err);
    res.render("adminDashboard", {
      bookings: [],
      bikes: [],
      user: req.session.user || null
    });
  }
};

// GET Add Bike Page
exports.addBikePage = (req, res) => {
  res.render("addBike", { bike: null, user: req.session.user || null, message: null });
};

// POST Add Bike
exports.addBike = async (req, res) => {
  try {
    const { name, description, pricePerDay } = req.body;
    const image = req.file ? req.file.filename : null;
    await Bike.create({ name, description, pricePerDay, image });
    res.redirect("/admin/dashboard");
  } catch (err) {
    console.error(err);
    res.render("addBike", { bike: null, user: req.session.user || null, message: "Error adding bike" });
  }
};

// GET Edit Bike Page
exports.editBikePage = async (req, res) => {
  try {
    const bike = await Bike.findById(req.params.id);
    if (!bike) return res.redirect("/admin/dashboard");
    res.render("editBike", { bike, user: req.session.user || null, message: null });
  } catch (err) {
    console.error(err);
    res.redirect("/admin/dashboard");
  }
};

// POST Update Bike
exports.updateBike = async (req, res) => {
  try {
    const { name, description, pricePerDay, isAvailable } = req.body;
    const image = req.file ? req.file.filename : undefined;
    const data = { name, description, pricePerDay, isAvailable: isAvailable === "on" };
    if (image) data.image = image;
    await Bike.findByIdAndUpdate(req.params.id, data);
    res.redirect("/admin/dashboard");
  } catch (err) {
    console.error(err);
    res.redirect("/admin/dashboard");
  }
};

// Delete Bike
exports.deleteBike = async (req, res) => {
  try {
    await Bike.findByIdAndDelete(req.params.id);
    res.redirect("/admin/dashboard");
  } catch (err) {
    console.error(err);
    res.redirect("/admin/dashboard");
  }
};

// Approve Booking
exports.approveBooking = async (req, res) => {
  try {
    await Booking.findByIdAndUpdate(req.params.id, { status: "approved" });
    res.redirect("/admin/dashboard");
  } catch (err) {
    console.error(err);
    res.redirect("/admin/dashboard");
  }
};

// Reject Booking
exports.rejectBooking = async (req, res) => {
  try {
    await Booking.findByIdAndUpdate(req.params.id, { status: "rejected" });
    res.redirect("/admin/dashboard");
  } catch (err) {
    console.error(err);
    res.redirect("/admin/dashboard");
  }
};
