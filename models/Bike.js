const mongoose = require("mongoose");

const BikeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  pricePerDay: { type: Number, required: true },
  image: String,
  isAvailable: { type: Boolean, default: true }
});

module.exports = mongoose.model("Bike", BikeSchema);
