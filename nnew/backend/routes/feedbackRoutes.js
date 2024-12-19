const express = require("express");
const router = express.Router();
const Conference = require("../models/Conference");
const Feedback = require("../models/Feedback");

router.post("/", async (req, res) => {
  const { username, conderenceId, feedback, userId } = req.body;
  const newFeedback = new Feedback({
    username,
    conderenceId,
    feedback,
    userId,
  });
  console.log(newFeedback);
  const savedFeedback = await newFeedback.save();
  res.status(201).json(savedFeedback);
});

router.get("/:conferenceId", async (req, res) => {
  const { conferenceId } = req.params;
  console.log(conferenceId);
  const conference = await Conference.findById(conferenceId);
  console.log(conference);
  if (!conference) {
    return res.status(404).json({ message: "Conference not found" });
  }
  const feedbacks = await Feedback.find({ conferenceId: conferenceId });
  console.log(feedbacks);
  res.json(feedbacks);
}); 


module.exports = router;
