const client = require("../db/connection");
const dbString = process.env.NODE_ENV || "production";
const db = client.db("test_practice");
const users = db.collection("users");

function postUser(userDetails) {
  users.findOne({ username: userDetails.username }).then((response) => {
    if (response !== null) {
      return Promise.reject({ msg: "Username exists" });
    }
    if (
      typeof userDetails.firstName !== "string" ||
      typeof userDetails.lastName !== "string" ||
      typeof userDetails.username !== "string"
    ) {
      return Promise.reject({ msg: "details missing" });
    }
  });
  return users.insertOne(userDetails);
}

module.exports = { postUser };
