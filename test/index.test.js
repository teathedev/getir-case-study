const request = require("supertest");
const mongoose = require('../src/mongoose');
const app = require("../src/app");

beforeAll(async () => {
  await mongoose.connect();
});

afterAll(async () => {
  await mongoose.disconnect();
});

describe("Test the root path", () => {
  test("It should response the POST method", async (done) => {
    const response = await request(app)
      .post("/")
      .send({ "startDate": "2016-01-26", "endDate": "2018-02-02", "minCount": 1000, "maxCount": 3000 });

    expect(response.statusCode).toBe(200);
    expect(response.body.code).toBe(0);
    expect(response.body.msg).toBe('success');
    done();
  });
});
