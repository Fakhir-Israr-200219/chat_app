const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema(
  {
    members: {
      type: [{ type: mongoose.Schema.Types.ObjectId, ref: "users" }],
    },
    last_message: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "message",
    },
    unread_message_count: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("chat", chatSchema);
