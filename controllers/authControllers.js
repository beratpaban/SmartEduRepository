const User = require("../models/User");
const bcrypt = require("bcrypt");
exports.createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json({
      status: "success",
      user,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error,
    });
  }
};

exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(400)
        .json({ status: "fail", message: "Kullanıcı bulunamadı" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({
        status: "fail",
        message: "Yanlış şifre",
      });
    }
    res.status(200).json({
      status: "success",
      message: "Giriş yapıldı",
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error,
    });
  }
};
