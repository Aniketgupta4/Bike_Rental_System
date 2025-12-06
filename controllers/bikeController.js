const Bike = require("../models/Bike");

exports.home = async (req, res) => {
  try {
    const bikes = await Bike.find();
    res.render("home", { bikes, user: req.session.user || null });
  } catch (err) {
    console.error(err);
    res.render("home", { bikes: [], user: req.session.user || null });
  }
};

exports.details = async (req, res) => {
  try {
    const bike = await Bike.findById(req.params.id);
    if (!bike) return res.redirect("/");
    res.render("bikeDetails", { bike, user: req.session.user || null });
  } catch (err) {
    console.error(err);
    res.redirect("/");
  }
};
