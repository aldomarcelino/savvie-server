const app = require("../app");
const request = require("supertest");
const { sequelize, Food } = require("../models");
const { queryInterface } = sequelize;

jest.setTimeout(1000);

const user_access_token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJyZXNjdWVmb29kQGdtYWlsLmNvbSIsImlhdCI6MTY2NzY0OTE1Mn0.Sqkgx312hBggjPziUR-QqYZD4mf8Le70OfR_HEyjhG0";

describe("Resto Routes Test", () => {
    describe("GET /resto/food - return data all foods", () => {
        test("200 Success get all foods data, return array", (done) => {
        request(app)
            .get("/resto/food")
            .set({ access_token: user_access_token })
            .then((response) => {
            const { body, status } = response;
            expect(status).toBe(200);
            expect(body[0]).toBeInstanceOf(Object);
            expect(body[0]).toHaveProperty("name", expect.any(String));
            expect(body[0]).toHaveProperty("price", expect.any(Number));
            expect(body[0]).toHaveProperty("rate", expect.any(Number));
            expect(body.length).toBeGreaterThan(0);
            done();
            })
            .catch((err) => {
            done(err);
            });
        });

        test("401 Failed get foods with invalid token - should return error unauthorized", (done) => {
        request(app)
            .get("/resto/food")
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

    describe("GET /resto/food/:id - return data one food", () => {
        test("200 Success get one food data, return object", (done) => {
        request(app)
            .get("/resto/food/9")
            .set({ access_token: user_access_token })
            .then((response) => {
            const { body, status } = response;
            expect(status).toBe(200);
            expect(body).toBeInstanceOf(Object);
            expect(body).toHaveProperty("name", expect.any(String));
            expect(body).toHaveProperty("price", expect.any(Number));
            expect(body).toHaveProperty("rate", expect.any(Number));
            expect(body).toHaveProperty("imageUrl", expect.any(String));
            done();
            })
            .catch((err) => {
            done(err);
            });
        });

        test("404 Failed get one food data, return error", (done) => {
        request(app)
            .get("/resto/food/100")
            .set({ access_token: user_access_token })
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

        test("401 Failed get one food with invalid token - should return error unauthorized", (done) => {
        request(app)
            .get("/resto/food/9")
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

    describe("POST /resto/food - create new resto food", () => {
        test("201 Success added food resto - should create new food resto", (done) => {
        request(app)
            .post("/resto/food")
            .send({
            name: "udang goreng tepung",
            price: "25000",
            rate: 0,
            imageUrl: "https://unsplash.com/photos/HNmcgpzPHag",
            description: "udang goreng terenak setasikmalaya",
            quantity: 20,
            sales: 1,
            discount: 0,
            CategoryId: 3,
            })
            .set({ access_token: user_access_token })
            .then((response) => {
            const { body, status } = response;
            expect(status).toBe(201);
            expect(body).toBeInstanceOf(Object);
            expect(body).toHaveProperty("name", expect.any(String));
            expect(body).toHaveProperty("price", expect.any(Number));
            expect(body).toHaveProperty("rate", expect.any(Number));
            expect(body).toHaveProperty("imageUrl", expect.any(String));
            return done();
            })
            .catch((err) => {
            done(err);
            });
        });

        test("401 Failed create food with invalid token - should return error unauthorized", (done) => {
        request(app)
            .post("/resto/food")
            .send({
            name: "udang goreng tepung",
            price: "25000",
            rate: 0,
            imageUrl: "https://unsplash.com/photos/HNmcgpzPHag",
            description: "udang goreng terenak setasikmalaya",
            quantity: 20,
            sales: 1,
            discount: 0,
            CategoryId: 3,
            })
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

    describe("DELETE /resto/food/:id - delete food resto by id", () => {
        test("200 Success deleted food", (done) => {
        request(app)
            .delete("/resto/food/1")
            .set({ access_token: user_access_token })
            .then((response) => {
            const { body, status } = response;
            expect(status).toBe(200);
            expect(body).toHaveProperty("message", expect.any(String));
            return done();
            })
            .catch((err) => {
            done(err);
            });
        });

        test("404 Failed delete food - food not found, return error", (done) => {
        request(app)
            .delete("/resto/food/100")
            .set({ access_token: user_access_token })
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

        test("401 Failed create food with invalid token - should return error unauthorized", (done) => {
        request(app)
            .delete("/resto/food/100")
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

    describe("PUT /resto/food/:id - edit food resto by id", () => {
        test("200 Success edit food resto", (done) => {
        request(app)
            .put("/resto/food/10")
            .send({
            name: "Edit food test",
            price: "500000",
            rate: 5,
            imageUrl: "https://unsplash.com/photos/HNmcgpzPHag",
            description: "udang goreng terenak setasikmalaya",
            quantity: 20,
            sales: 1,
            discount: 30,
            CategoryId: 3,
            })
            .set("access_token", user_access_token)
            .then((response) => {
            const { body, status } = response;
            expect(status).toBe(200);
            expect(body).toHaveProperty("message", expect.any(String));
            done();
            })
            .catch((err) => {
            done(err);
            });
        });

        test("404 Failed edit food - food not found, return error", (done) => {
        request(app)
            .put("/resto/food/100")
            .send({
            name: "Edit food test",
            price: "500000",
            rate: 5,
            imageUrl: "https://unsplash.com/photos/HNmcgpzPHag",
            description: "udang goreng terenak setasikmalaya",
            quantity: 20,
            sales: 1,
            discount: 30,
            CategoryId: 3,
            })
            .set({ access_token: user_access_token })
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

        test("401 Failed edit food with invalid token - should return error unauthorized", (done) => {
        request(app)
            .put("/resto/food/100")
            .send({
            name: "Edit food test",
            price: "500000",
            rate: 5,
            imageUrl: "https://unsplash.com/photos/HNmcgpzPHag",
            description: "udang goreng terenak setasikmalaya",
            quantity: 20,
            sales: 1,
            discount: 30,
            CategoryId: 3,
            })
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

    describe("PATCH /resto/food/food-status/:id - edit food status", () => {
        test("200 success edit food status", (done) => {
        request(app)
            .patch("/resto/food/food-status/17")
            .send({ status: "popular" })
            .set("access_token", user_access_token)
            .then((response) => {
            const { body, status } = response;
            expect(status).toBe(200);
            expect(body).toHaveProperty("message", expect.any(String));
            done();
            })
            .catch((err) => {
            done(err);
            });
        });

        test("404 Failed edit food - food not found, return error", (done) => {
        request(app)
            .patch("/resto/food/food-status/100")
            .send({ status: "popular" })
            .set({ access_token: user_access_token })
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

        test("401 Failed edit food - invalid token - should return error unauthorized", (done) => {
        request(app)
            .patch("/resto/food/food-status/17")
            .send({ status: "popular" })
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

    describe("PATCH /resto/food/food-active/:id - edit food to inactive", () => {
        test("200 success edit food to inactive", (done) => {
        request(app)
            .patch("/resto/food/food-active/17")
            .send({ is_active: false })
            .set("access_token", user_access_token)
            .then((response) => {
            const { body, status } = response;
            expect(status).toBe(200);
            expect(body).toHaveProperty("message", expect.any(String));
            done();
            })
            .catch((err) => {
            done(err);
            });
        });

        test("404 Failed edit food - food not found, return error", (done) => {
        request(app)
            .patch("/resto/food/food-active/100")
            .send({ is_active: false })
            .set({ access_token: user_access_token })
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

        test("401 Failed edit food - invalid token - should return error unauthorized", (done) => {
        request(app)
            .patch("/resto/food/food-active/17")
            .send({ is_active: false })
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

    describe("GET /resto/restaurants - return restaurants based on userId", () => {
        test("200 Success get restaurant data, return object", (done) => {
        request(app)
            .get("/resto/restaurants")
            .set({ access_token: user_access_token })
            .then((response) => {
            const { body, status } = response;
            expect(status).toBe(200);
            expect(body).toBeInstanceOf(Object);
            expect(body).toHaveProperty("name", expect.any(String));
            expect(body).toHaveProperty("description", expect.any(String));
            expect(body).toHaveProperty("logoUrl", expect.any(String));
            done();
            })
            .catch((err) => {
            done(err);
            });
        });

        test("401 Failed get restaurant data - invalid token - should return error unauthorized", (done) => {
        request(app)
            .get("/resto/restaurants")
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

    describe("PUT /resto/restaurants - edit restaurant data", () => {
        test("200 Success edit restaurant data", (done) => {
        request(app)
            .put("/resto/restaurants")
            .send({
            name: "Markobar",
            is_open: true,
            })
            .set("access_token", user_access_token)
            .then((response) => {
            const { body, status } = response;
            expect(status).toBe(200);
            expect(body).toHaveProperty("message", expect.any(String));
            done();
            })
            .catch((err) => {
            done(err);
            });
        });

        test("401 Failed edit restaurant - invalid token - should return error unauthorized", (done) => {
        request(app)
            .put("/resto/restaurants")
            .send({
            name: "Markobar",
            is_open: true,
            })
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

    describe("DELETE /resto/restaurants - delete restaurant by id", () => {
        test("200 Success deleted restaurant", (done) => {
        request(app)
            .delete("/resto/restaurants")
            .set({ access_token: user_access_token })
            .then((response) => {
            const { body, status } = response;
            expect(status).toBe(200);
            expect(body).toHaveProperty("message", expect.any(String));
            return done();
            })
            .catch((err) => {
            done(err);
            });
        });

        test("401 Failed deleted restaurant - invalid token - should return error unauthorized", (done) => {
        request(app)
            .delete("/resto/restaurants")
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
