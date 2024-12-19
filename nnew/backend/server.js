const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("dotenv").config();

const conferenceRoutes = require("./routes/conferenceRoutes");
const userRoutes = require("./routes/userRouter");
const feedbackRoutes = require("./routes/feedbackRoutes");

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use("/api/conferences", conferenceRoutes);
app.use("/api/users", userRoutes);
app.use("/api/feedback", feedbackRoutes);

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
