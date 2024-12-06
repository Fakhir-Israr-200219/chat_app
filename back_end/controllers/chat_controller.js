const router = require("express").Router();
const Chat = require("../models/chat");
const auth_middleware = require("../middleware/auth_middleware");

router.post("/create-new-chat", auth_middleware, async (req, res) => {
  try {
    const chat = await Chat(req.body);
    const chat_save = chat.save();

    res.status(202).send({
      message: "chat create",
      success: true,
      data: chat_save,
    });
  } catch (err) {
    res.status(400).send({
      message: err.message,
      success: false,
    });
  }
});

module.exports = router;
