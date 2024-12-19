const mongoose = require("mongoose");

const feedbackShema = new mongoose.Schema({
  feedback: {
    type: String,
    required: true,
    submittedAt: {
      type: Date,
      default: new Date(),
    },
  },
  username: {
    type: String,
    required: true,
  },
  conferenceId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Conference",
  },
});

module.exports = mongoose.model("Feedback", feedbackShema);
