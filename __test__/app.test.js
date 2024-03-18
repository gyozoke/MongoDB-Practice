const request = require("supertest");
const app = require("../app");
const client = require("../db/connection");
// const data = require("../db/data/testData");
const db = client.db("test_practice");
const users = db.collection("users");
const fs = require("fs/promises");

beforeAll(async () => {
  await users.drop();
  await db.createCollection("users");
});
afterAll(async () => {
  await client.close();
});

describe("Testing Endpints", () => {
  describe("POST/users", () => {
    test("201 post new user", () => {
      const newUser = {
        firstName: "Amir",
        lastName: "Rashidinia",
      };
      return request(app)
        .post("/users")
        .send(newUser)
        .then((response) => {
          expect(response.status).toBe(201);
        });
    });
  });
});
