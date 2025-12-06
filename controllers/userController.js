const Booking = require("../models/Booking");
const Bike = require("../models/Bike");

exports.dashboard = async (req, res) => {
  try {
    const requests = await Booking.find({ user: req.session.user._id }).populate("bike");
    res.render("userDashboard", { requests, user: req.session.user || null });
  } catch (err) {
    console.error(err);
    res.render("userDashboard", { requests: [], user: req.session.user || null });
  }
};

exports.bookBike = async (req, res) => {
  try {
    const bike = await Bike.findById(req.params.id);
    if (!bike) return res.redirect("/");

    const days = parseInt(req.body.days) || 1;
    const totalPrice = days * bike.pricePerDay;

    await Booking.create({
      user: req.session.user._id,
      bike: bike._id,
      days,
      totalPrice
    });

    res.redirect("/user/dashboard");
  } catch (err) {
    console.error(err);
    res.redirect("/");
  }
};
