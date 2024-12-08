const router = require("express").Router();
const Chat = require("../models/chat");
const auth_middleware = require("../middleware/auth_middleware");
const chat = require("../models/chat");

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


router.post("/get-all-chat", auth_middleware, async (req, res) => {
  try {
    const chat = await chat.findOne({members :{$in :req.body.userId}})
    res.status(200).send({
      message: "chat fetch successfully",
      chats : chat,
      success : true
    });

  } catch (err) {
    res.status(400).send({
      message: err.message,
      success: false,
    });
  }
});

module.exports = router;
