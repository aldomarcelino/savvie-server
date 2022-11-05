const app = require("../app");
const request = require("supertest");
const { sequelize } = require("../models");
const { queryInterface } = sequelize;
const { User, Food } = require("../models/index");
const { createSign } = require("../helpers/jwt");
require("dotenv").config();

jest.setTimeout(1000);

let access_token = createSign(
    {
        id: 1,
    },
    process.env.ACCESS_TOKEN
);

let dataFood = require("../data/foods.json");
let foods = dataFood.map((el) => {
    el.createdAt = el.updatedAt = new Date();
    return el;
});

beforeAll(() => {
    return queryInterface.bulkInsert("Food", foods);
});

afterAll(() => {
    return queryInterface.bulkDelete(`Food`, null, {
    truncate: true,
    cascade: true,
    restartIdentity: true,
    });
});

describe("Food Routes Test", () => {
    describe("GET /food - return data all foods", () => {
        test("200 Success get all foods data, return array", (done) => {
        request(app)
            .get("/food")
            .then((response) => {
                const { body, status } = response;
                expect(status).toBe(200);
                expect(body[0]).toBeInstanceOf(Object);
                expect(body[0].Category).toBeInstanceOf(Object);
                expect(body[0].Restaurant).toBeInstanceOf(Object);
                done();
            })
            .catch((err) => {
                done(err);
            });
        });
    });

    describe("GET /food/:id - return data food by Id", () => {
        test("200 Success get one food data, return object", (done) => {
        request(app)
            .get("/food/1")
            .then((response) => {
                const { body, status } = response;
                expect(status).toBe(200);
                expect(body).toBeInstanceOf(Object);
                expect(body).toHaveProperty("id", expect.any(Number));
                expect(body.Category).toBeInstanceOf(Object);
                expect(body.Restaurant).toBeInstanceOf(Object);
                done();
            })
            .catch((err) => {
                done(err);
            });
        });
    });
});
