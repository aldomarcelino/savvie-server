const app = require("../app");
const request = require("supertest");
const { sequelize, Category  } = require("../models");
const { queryInterface } = sequelize;

jest.setTimeout(1000);

const user_access_token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJyZXNjdWVmb29kQGdtYWlsLmNvbSIsImlhdCI6MTY2NzgwMzczOH0.4MmXjVEcOLYdNmEwqY4hrLqBBoOGE3OpVx3OVepg2OQ";

    describe("Basket Routes Test", () => {
        describe("POST /basket/:id - create new basket", () => {
            test("201 Success added basket - should create new basket", (done) => {
                request(app)
                    .post("/basket/3")
                    .set({ access_token: user_access_token })
                    .then((response) => {
                    const { body, status } = response;
                    expect(status).toBe(201);
                    expect(body).toBeInstanceOf(Object);
                    expect(body).toHaveProperty("quantity", expect.any(Number));
                    expect(body).toHaveProperty("comition", expect.any(Number));
                    expect(body).toHaveProperty("FoodId", expect.any(Number));
                    expect(body).toHaveProperty("UserId", expect.any(Number));
                    return done();
                    })
                    .catch((err) => {
                    done(err);
                    });
            });
        })

        describe("GET /basket - return data all basket", () => {
            test("200 Success get one food data, return object", (done) => {
                request(app)
                    .get("/basket")
                    .set({ access_token: user_access_token })
                    .then((response) => {
                    const { body, status } = response;
                    expect(status).toBe(200);
                    expect(body[0]).toBeInstanceOf(Object);
                    expect(body[0]).toHaveProperty("UserId", expect.any(Number));
                    expect(body[0]).toHaveProperty("FoodId", expect.any(Number));
                    expect(body[0]).toHaveProperty("comition", expect.any(Number));
                    done();
                    })
                    .catch((err) => {
                    done(err);
                    });
                });
        })

        describe("PATCH /basket/plus/:id - edit basket to increment value", () => {
            test("200 success increment resto", (done) => {
            request(app)
                .patch("/basket/plus/1")
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
    
            test("404 Failed increment basket - basket not found, return error", (done) => {
            request(app)
                .patch("/basket/plus/100")
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
    
            test("401 Failed increment food - invalid token - should return error unauthorized", (done) => {
            request(app)
                .patch("/basket/plus/1")
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

        describe("PATCH /basket/minus/:id - edit basket to decrement value", () => {
            test("200 success decrement resto", (done) => {
            request(app)
                .patch("/basket/minus/1")
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
    
            test("404 Failed decrement basket - basket not found, return error", (done) => {
            request(app)
                .patch("/basket/minus/100")
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
    
            test("401 Failed decrement food - invalid token - should return error unauthorized", (done) => {
            request(app)
                .patch("/basket/minus/1")
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

        // describe("DELETE /basket/:id - delete basket by id", () => {
        //     test("200 Success deleted basket", (done) => {
        //     request(app)
        //         .delete("/basket/1")
        //         .set({ access_token: user_access_token })
        //         .then((response) => {
        //         const { body, status } = response;
        //         expect(status).toBe(200);
        //         expect(body).toHaveProperty("message", expect.any(String));
        //         return done();
        //         })
        //         .catch((err) => {
        //         done(err);
        //         });
        //     });
    
        //     test("401 Failed deleted basket - invalid token - should return error unauthorized", (done) => {
        //     request(app)
        //         .delete("/basket/1")
        //         .set("access_token", "ini invalid token")
        //         .then((response) => {
        //         const { body, status } = response;
        //         expect(status).toBe(401);
        //         expect(body).toHaveProperty("message", "Invalid token");
        //         return done();
        //         })
        //         .catch((err) => {
        //         done(err);
        //         });
        //     });
        // });
    })