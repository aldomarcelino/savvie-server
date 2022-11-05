const app = require("../app");
const request = require("supertest");
const { sequelize, User, Food  } = require("../models");
const { queryInterface } = sequelize;
require("dotenv").config();

jest.setTimeout(1000);

let dataFood = require("../data/foods.json");
let foods = dataFood.food.map((el) => {
    el.createdAt = el.updatedAt = new Date();
    return el;
});

beforeEach(async () => {
    await queryInterface.bulkInsert("Food", foods);
});

afterEach(async () => {
    await queryInterface.bulkDelete(`Food`, null, {
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
