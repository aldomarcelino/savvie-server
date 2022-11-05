const app = require("../app");
const request = require("supertest");
const { sequelize, Food } = require("../models");
const { queryInterface } = sequelize;

jest.setTimeout(1000);

const user_access_token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJyZXNjdWVmb29kQGdtYWlsLmNvbSIsImlhdCI6MTY2NzY0OTE1Mn0.Sqkgx312hBggjPziUR-QqYZD4mf8Le70OfR_HEyjhG0";

describe("Food Routes Test", () => {
    describe("GET /search - return data with matching search result", () => {
        test("200 Success get foods and restaurant data with matching search result, return object", (done) => {
        request(app)
            .get("/search?=ayam")
            .set({ access_token: user_access_token })
            .then((response) => {
            const { body, status } = response;
            expect(status).toBe(200);
            expect(body.food).toBeInstanceOf(Array);
            expect(body.restaurant).toBeInstanceOf(Array);
            done();
            })
            .catch((err) => {
            done(err);
            });
        });
    });
});
