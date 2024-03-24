const express = require("express");
const { addUser } = require("./Controllers/controllers");
const app = express();

app.use(express.json());

app.post("/users", addUser);

app.use((error, req, res, next) => {
  if (error.msg === "Username exists" || error.msg === "details missing") {
    res.status(400).send(error.msg);
  }
});

module.exports = app;
