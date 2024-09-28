const port = 4000;
const express = require("express");
const conn = require("./conn");
const user = require("./userSchema");
const app = express();
var cors = require("cors");

app.use(express.json());

app.get("/", (req, res) => {
  res.send("helo world");
});

// ye hm data insert krenge post method se
// CREATE DATA

app.post("/user", async (req, res) => {
  //   const { name, email, password } = req.body;
  //   console.log(req.body.name);
  const datainsert = await user({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });

  const status = await datainsert.save();
  if (status) {
    res.send("data insert");
  } else {
    res.send("data not insert");
  }
});

//READ DATA

app.get("/user", async (req, res) => {
  const data = await user.find();
  res.status(201).send(data);
});

app.delete("/user/:id", async (req, res) => {
  const ids = req.params.id;
  await user.deleteOne({ _id: ids });
  res.send("delete succ");
});

app.delete("/user", async (req, res) => {
  console.log(req.query.name);
  const data = await new user({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });
  await data.save();

  res.status(201).send("successful");
});

app.listen(port);
