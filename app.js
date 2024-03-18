const express = require("express");
const { addUser } = require("./Controllers/controllers");
const app = express();

app.use(express.json());

app.post("/users", addUser);
