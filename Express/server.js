const express = require("express");
const app = express();
require("dotenv").config();
const bodyParser = require("body-parser");
const zod = require("zod");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(bodyParser.json());

const port = process.env.PORT || 3000;

const schema1 = zod.array(zod.number());

const schema2 = zod.array(zod.string());

const schema = zod.object({
  email: zod.string().email(),
  password: zod.string().min(8),
  country: zod.literal("IN").or(zod.literal("US")),
});

const user = [
  {
    name: "John",
    keydneys: [
      {
        healthy: false,
      },
    ],
  },
];

let noOfRequests = 0;
function calculateRequest(req, res, next) {
  noOfRequests++;
  console.log(noOfRequests);
  next();
}

app.use(calculateRequest); // when we use this it means it will be excecuted for every route

app.get("/", (req, res) => {
  let johnKeydneys = user[0].keydneys;
  let numberOfKeydneys = johnKeydneys.length;
  let numberOfHelthyKeydneys = 0;
  for (let i = 0; i < numberOfKeydneys; i++) {
    if (johnKeydneys[i].healthy === true) {
      numberOfHelthyKeydneys = numberOfHelthyKeydneys + 1;
    }
  }

  let numberOfUnhelthyKeydneys = numberOfKeydneys - numberOfHelthyKeydneys;

  res.json({
    numberOfKeydneys,
    numberOfHelthyKeydneys,
    numberOfUnhelthyKeydneys,
  });
});

// Post Route

app.post("/", (req, res) => {
  const isHealthy = req.body.isHealthy;
  user[0].keydneys.push({ healthy: isHealthy });
  res.json({
    msg: "Done",
  });
});

app.post("/health-checkup", (req, res) => {
  const kidneys = req.body.kidneys;

  const response = schema.safeParse(kidneys);

  if (!response.success) {
    res.status(411).send({
      msg: "Input is invalid",
    });
  } else {
    res.send({
      response,
    });
  }
});

// Put / Update Route

app.put("/", (req, res) => {
  for (let i = 0; i < user[0].keydneys.length; i++) {
    user[0].keydneys[i].healthy = true;
  }
  res.json({
    msg: "Keydneys Updated",
  });
});

// Delete Route

app.delete("/", (req, res) => {
  const newKidneys = [];
  for (let i = 0; i < user[0].keydneys.length; i++) {
    if (user[0].keydneys[i].healthy) {
      newKidneys.push(user[0].keydneys[i]);
    }
  }
  user[0].keydneys = newKidneys;
  res.json({
    msg: "Healthy Keydneys Removed",
  });
});

const textContent = [];

app.post("/content", (req, res) => {
  console.log("Received POST request to /content");
  console.log("Request body:", req.body);

  const newContent = req.body.content;

  if (!newContent || Object.keys(newContent).length === 0) {
    console.log("No content received in request body");
    return res.status(400).send({ message: "Content is required" });
  }

  textContent.push(newContent);
  console.log("Updated textContent array:", textContent);

  res.status(201).send({ receivedData: textContent });
});

//get headers

app.get("/get-info", (req, res) => {
  const userAgent = req.headers["user-agent"];
  const acceptLanguage = req.headers["accept-language"];

  res.json({
    userAgent,
    acceptLanguage,
  });
});

//get queries

app.get("/api/user", (req, res) => {
  const userId = req.query.id;
  const name = req.query.name;

  const user = {
    id: userId,
    name: name,
  };

  res.json({ user });
});

app.get("/greet/:name", (req, res) => {
  const { name } = req.params;
  console.log(name);
  res.json({ message: `Hello ${name}` });
});

app.use((err, req, res, next) => {
  res.json({
    msg: "Sorry Something with the server is wrong",
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
