const express = require("express");
const Conference = require("../models/Conference");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const conferences = await Conference.find();
    res.json(conferences);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
router.post("/", async (req, res) => {
  const conference = new Conference({
    title: req.body.title,
    date: req.body.date,
    location: req.body.location,
    description: req.body.description,
  });
  try {
    const newConference = await conference.save();
    res.status(201).json(newConference);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
