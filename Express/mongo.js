const mongoose = require("mongoose");
const express = require("express");
const { nativeEnum } = require("zod");

const app = express();

app.use(express.json());

mongoose.connect("mongodb://localhost:27017/user_app");

const User = mongoose.model("Users", {
  name: String,
  email: String,
  password: String,
});

app.post("/signup", async (req, res) => {
  const name = req.body.name;
  const username = req.body.username;
  const password = req.body.password;
  console.log(username, password);

  let existUser = await User.findOne({ email: username });

  if (existUser) {
    return res.status(400).json({
      msg: "User is Already Created!!",
    });
  }
  const user = new User({
    name: name,
    email: username,
    password: password,
  });

  user.save();
  res.json({
    msg: "User Created Successfully!!",
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
