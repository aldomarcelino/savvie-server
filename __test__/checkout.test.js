const app = require("../app");
const request = require("supertest");
const { sequelize, Food } = require("../models");
const { queryInterface } = sequelize;

jest.setTimeout(1000);

const user_access_token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJyZXNjdWVmb29kQGdtYWlsLmNvbSIsImlhdCI6MTY2NzY0OTE1Mn0.Sqkgx312hBggjPziUR-QqYZD4mf8Le70OfR_HEyjhG0";

describe("Checkout Routes Test", () => {
  describe("GET /checkout - return data order food", () => {
    test("200 Success get order food, return array", (done) => {
      request(app)
        .get("/checkout")
        .set({ access_token: user_access_token })
        .then((response) => {
          const { body, status } = response;
          expect(status).toBe(200);
          expect(body).toBeInstanceOf(Object);
          done();
        })
        .catch((err) => {
          done(err);
        });
    });

    test("401 Failed get order food with invalid token - should return error unauthorized", (done) => {
      request(app)
        .post("/checkout")
        .set("access_token", "ini invalid token")
        .then((response) => {
          const { body, status } = response;
          expect(status).toBe(401);
          expect(body).toHaveProperty("message", "Invalid token");
          return done();
        })
        .catch((err) => {
          done(err);
        });
    });
  });
});
