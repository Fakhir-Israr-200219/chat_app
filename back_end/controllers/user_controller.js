const router = require("express").Router();
const User = require("../models/user_model");
const auth_middleware = require("../middleware/auth_middleware");

router.get("/get-logged-user", auth_middleware, async (req, res) => {
  try {
    const user = await User.find({ _id: req.body.userId });
    res.status(200).send({
      message: "user fetch successfully",
      success: true,
      data: user,
    });
  } catch (error) {
    res.status(500).send({
      message: error.message,
      success: false,
    });
  }
});

router.get("/get-all-user", auth_middleware, async (req, res) => {
  try {
    const user = await User.findOne({ _id: { $ne: req.body.userId } });
    res.status(200).send({
      message: "all use data fetch successfully",
      success: true,
      data: user,
    });
  } catch (error) {
    res.status(500).send({
      message: error.message,
      success: false,
    });
  }
});

module.exports = router;
