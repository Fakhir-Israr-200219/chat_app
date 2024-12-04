const router = require("express").Router();
const user = require("../models/user_model");
const bcrypt = require("bcryptjs");

router.post("/singup", async (req, res) => {
  try {
    const user_entity = await user.findOne({ email: req.body.email });
    if (user_entity) {
      return res.send({
        message: "user already exist",
        success: false,
      });
    }
    const hash_passsword = await bcrypt.hash(req.body.password, 10);
    req.body.password = hash_passsword;

    const new_user = await user(req.body);
    await new_user.save();

    res.send({
      message: "user created succesfuly",
      success: true,
    });
  } catch (err) {
    res.send({
      message: err,
      success: false,
    });
  }
});

module.exports = router;
