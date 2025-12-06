const User = require("../models/User");
const bcrypt = require("bcryptjs");

exports.showLogin = (req, res) => res.render("login", { message: null });
exports.showSignup = (req, res) => res.render("signup", { message: null });

exports.signup = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    const hashed = await bcrypt.hash(password, 10);
    const user = await User.create({ name, email, password: hashed, role });
    req.session.user = { _id: user._id, name: user.name, email: user.email, role: user.role };
    return res.redirect(user.role === "admin" ? "/admin/dashboard" : "/user/dashboard");
  } catch (err) {
    console.error(err);
    return res.render("signup", { message: "Email already exists or error" });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.render("login", { message: "Invalid email/password" });
    const ok = await bcrypt.compare(password, user.password);
    if (!ok) return res.render("login", { message: "Invalid email/password" });

    req.session.user = { _id: user._id, name: user.name, email: user.email, role: user.role };
    return res.redirect(user.role === "admin" ? "/admin/dashboard" : "/user/dashboard");
  } catch (err) {
    console.error(err);
    return res.render("login", { message: "Login error" });
  }
};

exports.logout = (req, res) => {
  req.session.destroy(() => res.redirect("/"));
};
