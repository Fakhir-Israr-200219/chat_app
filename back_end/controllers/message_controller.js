const router = require("express").Router();
const auth_middleware = require("../middleware/auth_middleware");
const chat = require("../models/chat");
const message = require("../models/message");

router.post("/new-message",auth_middleware, async (req, res) => {
  try {
    // store the message in db
    const new_message = new message(req.body);
    const save_message = await new_message.save();

    // update the last message in chat collection
    // const current_chat = await chat.findById(req.body.chat_id)
    // current_chat.last_message = save_message._id;
    // await current_chat.save()

    const cusrrent_chat = await chat.findByIdAndUpdate(
      {
        _id: req.body.chatId,
      },
      {
        last_message: save_message._id,
        $inc: { unread_message_count: 1 },
      }
    );
    res.status(200).send({
        message: "message sent successfully ",
        success: true,
        data : save_message
      });
  } catch (error) {
    res.status(400).send({
      message: err.message,
      success: false,
    });
  }
});




router.get('/get-all-message/:chat_id',auth_middleware,async(req,res) =>{
    try {
        const all_message = await message.find({chat_id:req.params.chat_id}).sort({createdAt:1});
        res.send({
            message : "messages fetch successfully",
            success:true,
            data:all_message
        })

    } catch (error) {
        res.status(400).send({
            message: err.message,
            success: false,
          });
    }
})

module.exports = router;
