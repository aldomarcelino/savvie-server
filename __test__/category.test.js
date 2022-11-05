const app = require("../app");
const request = require("supertest");
const { sequelize, Category  } = require("../models");
const { queryInterface } = sequelize;

jest.setTimeout(1000);

let dataCategory = require("../data/categories.json");
let categories = dataCategory.categories.map((el) => {
    el.createdAt = el.updatedAt = new Date();
    return el;
});

beforeEach(async () => {
    await queryInterface.bulkInsert("Category", categories);
});

afterEach(async () => {
    await queryInterface.bulkDelete("Category", null, {
    truncate: true,
    cascade: true,
    restartIdentity: true,
    });
});

describe("Category Routes Test", () => {
    describe("GET /categories - return data all categories", () => {
        test("200 Success get all categories data, return array", (done) => {
        request(app)
            .get("/categories")
            .then((response) => {
                const { body, status } = response;
                expect(status).toBe(200);
                expect(body[0]).toBeInstanceOf(Object);
                expect(body[0]).toHaveProperty("id", expect.any(Number));
                expect(body[0]).toHaveProperty("name", expect.any(String));
                expect(body[0]).toHaveProperty("imageUrl", expect.any(String));
                // expect(body[0].Food).toBeInstanceOf(Object);
                expect(body[0].CategoryRestos).toBeInstanceOf(Array);
                done();
            })
            .catch((err) => {
                done(err);
            });
        });
    });

    describe("GET /categories/:id - return data categories by Id", () => {
        test("200 Success get one categories data, return object", (done) => {
        request(app)
            .get("/categories/2")
            .then((response) => {
                const { body, status } = response;
                expect(status).toBe(200);
                expect(body).toBeInstanceOf(Object);
                expect(body).toHaveProperty("id", expect.any(Number));
                expect(body).toHaveProperty("name", expect.any(String));
                expect(body).toHaveProperty("imageUrl", expect.any(String));
                // expect(body.Food).toBeInstanceOf(Object);
                expect(body.CategoryRestos).toBeInstanceOf(Array);
                done();
            })
            .catch((err) => {
                done(err);
            });
        });

        test("404 Failed get one categories data, return error", (done) => {
            request(app)
                .get("/categories/100")
                .then((response) => {
                    const { body, status } = response;
                    expect(status).toBe(404);
                    expect(body).toHaveProperty("message", "Id or data not found");
                    done();
                })
                .catch((err) => {
                    done(err);
                });
            });
        });
    });
