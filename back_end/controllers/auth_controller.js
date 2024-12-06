const router = require("express").Router();
const user_model = require("../models/user_model");
const user = require("../models/user_model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

router.post("/singup", async (req, res) => {
  try {
    const user_entity = await user.findOne({ email: req.body.email });
    if (user_entity) {
      return res.status(400).send({
        message: "user already exist",
        success: false,
      });
    }
    const hash_passsword = await bcrypt.hash(req.body.password, 10);
    req.body.password = hash_passsword;

    const new_user = await user(req.body);
    await new_user.save();

    res.status(201).send({
      message: "user created succesfuly",
      success: true,
    });
  } catch (err) {
    res.status(500).send({
      message: err,
      success: false,
    });
  }
});

router.post("/login", async (req, res) => {
  try {
    //check user is exist
    const user = await user_model.findOne({ email: req.body.email });
    if (!user) {
      return res.status(404).send({
        message: "user not exist",
        success: false,
      });
    }
    //password is corerct
    const password_ok = await bcrypt.compare(user.password, req.body.password);
    if (password_ok) {
      return res.status(404).send({
        message: "invalid passsword",
        success: false,
      });
    }
    //provide token
    const token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY,{expiresIn:"1d"});

    res.status(200).send({
      message: "user logged-in successfully",
      success: true,
      token: token,
    });

  } catch (err) {
    res.status(500).send({
      message: err,
      success: false,
    });
  }
});

module.exports = router;
