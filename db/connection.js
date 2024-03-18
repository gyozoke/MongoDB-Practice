const ENV = process.env.NODE_env || "production";

const { MongoClient } = require("mongodb");
require("dotenv").config({
  path: `${__dirname}/../.env.${ENV}`,
});

const config = {};
if (ENV === "production") {
  config.connectionString = process.env.MONGODB_URL;
  config.max = 2;
} else {
  config.connectionString = process.env.MONGODB_URL;
}
console.log(config);

const client = new MongoClient(config.connectionString);

if (!process.env.MONGODB_URL) {
  throw new Error("mongodb url not set");
}
module.exports = client;
