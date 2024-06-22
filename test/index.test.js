const request = require("supertest");
const { app, server } = require("../index");

describe("GET /", () => {
  it("responds with Hello World!", async () => {
    const response = await request(app).get("/");
    expect(response.text).toBe("Hello World!");
    expect(response.statusCode).toBe(200);
  });

  afterAll(() => {
    return new Promise((resolve) => {
      server.close(() => {
        resolve();
      });
    });
  });
});
